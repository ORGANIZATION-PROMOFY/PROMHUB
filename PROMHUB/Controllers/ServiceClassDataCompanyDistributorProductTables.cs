using System.Collections.Generic;
using System.Linq;
using global::PROMHUB.Data;
using Microsoft.EntityFrameworkCore;
using PROMHUB.Data.Models;

namespace PROMHUB.Controllers
{
    public class ServiceClassDataCompanyDistributorProductTables
    {
        private readonly AppDbContext _context;
        private readonly ImageService _imageService; // Внедряем службу ImageService

        public ServiceClassDataCompanyDistributorProductTables(AppDbContext context, ImageService imageService)
        {
            _context = context;
            _imageService = imageService; // Инициализируем службу ImageService
        }

        public IEnumerable<List<CombinedDataCompanyDistributorProductTables>> GetCombinedData()
        {
            var combinedData = (from product in _context.Product
                               join productDistributor in _context.ProductDistributor on product.Id equals productDistributor.ProductId
                               join distributor in _context.Distributor on productDistributor.DistributorId equals distributor.Id
                               join company in _context.Company on distributor.CompanyId equals company.Id
                               join companyInfo in _context.CompanyInfo on company.Id equals companyInfo.CompanyId
                               select new CombinedDataCompanyDistributorProductTables
                               {
                                   Product = new ProductData
                                   {
                                       Id = product.Id,
                                       Name = product.Name,
                                       Price = product.Price,
                                       Photo = _imageService.GetImageUrl(product.Photo),
                                       Discount = product.Discount
                                   },
                                   Distributor = new DistributorData
                                   {
                                       Id = distributor.Id,
                                       Address = distributor.AddressString,
                                       Rating = distributor.Rating
                                   },
                                   Company = new CompanyData
                                   {
                                       Id = company.Id,
                                       Name = company.Name,
                                       Description = companyInfo.Description,
                                       ContactPhone = companyInfo.ContactPhone,
                                       ContactEmail = companyInfo.ContactEmail,
                                       Photo = _imageService.GetImageUrl(companyInfo.Photo)
                                   }
                               }).ToList();

            var chunkSize = 5;
            var totalCount = combinedData.Count();
            var pages = (int)Math.Ceiling((double)totalCount / chunkSize);

            for (int i = 0; i < pages; i++)
            {
                yield return combinedData.Skip(i * chunkSize).Take(chunkSize).ToList();
            }
        }
    }
}

