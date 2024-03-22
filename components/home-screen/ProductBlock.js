import { View, FlatList } from 'react-native';
import Distributor from './Distributor'

const ProductBlock = ({ company, query }) => {
  const filteredProducts = company.products.filter((product) => 
    product.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <View>
      <Distributor company={company} products={filteredProducts} />
    </View>
  );
};


export default ProductBlock;
