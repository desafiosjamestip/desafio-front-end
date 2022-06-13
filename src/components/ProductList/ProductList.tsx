import { Box, Table } from '../../styles/components';
import { useProduct } from '../../hooks/UserProvider';
import { colors } from '../../styles/tokens';
const ProductList = () => {
  const { products } = useProduct();
  return (
    <Box height="100%" backgroundColor={colors.white}>
      <Table data={products} />
    </Box>
  );
};
export { ProductList };
