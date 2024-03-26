import { View, FlatList } from "react-native";
import Company from "./Company";
import Product from "./Product";

const ProductBlock = ({ products }) => {
  const productsByCompany = {};

  products.forEach((product) => {
    const companyName = product.company.name;
    if (!productsByCompany[companyName]) {
      productsByCompany[companyName] = [];
    }
    productsByCompany[companyName].push(product);
  });

  return (
    <View>
      {Object.keys(productsByCompany).map((companyName, index) => (
        <View key={index}>
          <Company company={productsByCompany[companyName][0].company} />
          {productsByCompany[companyName].map((product, productIndex) => (
            <Product key={productIndex} product={product} />
          ))}
        </View>
      ))}
    </View>
  );
};

export default ProductBlock;
