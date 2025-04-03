import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";
import dayjs from "dayjs";

const SalesChart = () => {
  // Generate the last 30 days dynamically
  const last30Days = Array.from({ length: 30 }, (_, i) =>
    dayjs().subtract(29 - i, "day").format("MMM DD")
  );

  // Sample food items sold
  const foodItems = ["Pizza", "Burger", "Pasta", "Sushi", "Salad"];

  // Generate random sales data for each food item over the last 30 days
  const seriesData = foodItems.map((food) => ({
    name: food,
    data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100)), // Replace with actual sales data
  }));

  const chartoptions = {
    series: seriesData,
    options: {
      chart: {
        type: "bar",
        stacked: true, // Stacked bars for better visualization
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 3,
      },
      stroke: {
        width: 1,
      },
      xaxis: {
        categories: last30Days, // Last 30 days dynamically
        title: {
          text: "Last 30 Days",
        },
      },
      yaxis: {
        title: {
          text: "Units Sold",
        },
      },
      legend: {
        position: "top",
      },
    },
  };

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Food Sales Summary</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Last 30 Days Sales Report
        </CardSubtitle>
        <Chart
          type="bar"
          width="100%"
          height="390"
          options={chartoptions.options}
          series={chartoptions.series}
        ></Chart>
      </CardBody>
    </Card>
  );
};

export default SalesChart;
