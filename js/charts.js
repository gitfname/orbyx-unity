// colors
var blue = '#A0D7E7';
var blueLight = '#0e97b5';
var purple = '#6C5DD3';
var white = '#ffffff';
// var blueOpacity = '#e6efff';
// var blueLight = '#50B5FF';
var pink = '#FFB7F5';
// var orangeOpacity = '#fff5ed';
var yellow = '#FFCE73';
var green = '#7FBA7A';
var red = '#FF754C';
// var greenOpacity = '#ecfbf5';
var gray = '#808191';
var grayOpacity = '#f2f2f2';
// var grayLight = '#E2E2EA';
var borderColor = "#E4E4E4";
// var text = "#171725";

// charts
Apex.chart = {
  fontFamily: 'Inter, sans-serif',
  fontSize: 13,
  fontWeight: 500,
  foreColor: gray
};

// chart active users
(function () {
  var options = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    series: [{
      name: 'Active users',
      data: [442, 380, 275, 430, 509, 463, 407, 533, 470]
    }],
    colors: [purple],
    chart: {
      height: '100%',
      type: 'line',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    grid: {
      borderColor: borderColor,
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    tooltip: {
      enabled: false
    },
    stroke: {
      width: 2,
      curve: 'smooth'
    },
    xaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    }
  };

  var chart = document.querySelector('#chart-active-users');
  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})();

// chart users counter
(function () {
  var options = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul'],
    series: [{
      name: 'New users',
      data: [400, 380, 240, 280, 390, 330, 175]
    }, {
      name: 'Users',
      data: [100, 0, 0, 0, 60, 0, 20]
    }],
    colors: [white, borderColor],
    chart: {
      height: '100%',
      type: 'bar',
      stacked: true,
      toolbar: {
        show: false
      }
    },
    grid: {
      borderColor: borderColor,
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      },
      padding: {
        top: 0,
        left: 10,
        right: 0,
        bottom: 0
      }
    },
    stroke: {
      curve: 'smooth'
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        endingShape: 'rounded',
        columnWidth: '10%'
      }
    },
    legend: {
      show: false
    },
    tooltip: {
      x: {
        show: false
      },
      shared: true
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      tooltip: {
        enabled: false
      }
    },
    yaxis: {
      axisBorder: {
        color: borderColor
      },
      axisTicks: {
        show: false
      },
      tooltip: {
        enabled: false
      },
      labels: {
        style: {
          colors: white
        }
      }
    }
  };

  var chart = document.querySelector('#chart-users-counter');
  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})();

// chart users blue color
(function () {
  var options = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    series: [{
      name: '',
      data: [35, 66, 34, 56, 18]
    }],
    colors: [blue],
    chart: {
      height: '100%',
      type: 'bar',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    grid: {
      borderColor: borderColor,
      strokeDashArray: 0,
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false
        }
      }
    },
    stroke: {
      curve: 'smooth'
    },
    dataLabels: {
      enabled: false
    },
    plotOptions: {
      bar: {
        columnWidth: '80%'
      }
    },
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 0.9
        }
      }
    },
    legend: {
      show: false
    },
    tooltip: {
      shared: true
    },
    xaxis: {
      axisBorder: {
        show: false,
        color: borderColor
      },
      axisTicks: {
        show: false
      },
      tooltip: {
        enabled: false
      }
    }
  };

  var chart = document.querySelector('#chart-users-blue');
  if (chart != null) {
    new ApexCharts(chart, options).render();
  }
})();