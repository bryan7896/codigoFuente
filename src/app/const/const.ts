export const data = {
  data:[],
  label:'',
  backgroundColor: ''
}

export const configCharBar = {
  type: 'bar',
  data: data,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Week Payment Forecast'
      },
    },
    responsive: true,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        stacked: false,
      },
      y: {
        stacked: false
      }
    }
  }
};
