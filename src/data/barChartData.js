export default function barChartData(barData) {
  const listDataSet = [];
  const rootStyle = getComputedStyle(document.body);
  let c = 1;

  if (barData != null) {
    barData.forEach((element) => {
      const theme1 = `--theme-color-${c.toString()}`;
      const theme10 = `--theme-color-${c.toString()}-10`;

      listDataSet.push({
        label: element.name,
        borderColor: rootStyle.getPropertyValue(theme1).trim(),
        backgroundColor: rootStyle.getPropertyValue(theme10).trim(),
        data: element.data,
        borderWidth: 2,
      });
      c += 1;
    });
  }

  return {
    labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
    datasets: listDataSet,
  };
}
