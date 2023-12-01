// import { useGetExpenseTypesQuery } from '@/redux/services/expenseTypeAPI';
import { StyleSheet, Text, View } from 'react-native';

const ExpenseCategoryScreen = () => {
  // const { data, isLoading } = useGetExpenseTypesQuery();
  return (
    <View style={styles.rootContainer}>
      <Text>Expense Type (Category)</Text>
      {/* <Text>{data[0].title}</Text>
      <Text>{data[1].title}</Text>
      <Text>{data[2].title}</Text> */}
    </View>
  );
};

export default ExpenseCategoryScreen;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
