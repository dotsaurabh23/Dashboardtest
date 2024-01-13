// const sidebarNav = document.querySelector('#sidebar-nav');
//     new CDB.Sidebar(sidebarNav);


//     const sidebarShow = document.querySelector('#sidebar-showcase');
//     new CDB.Sidebar(sidebarShow);
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */

// particle .js code
  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });


  // date calender code 
  const startDateInput = document.getElementById('start-date');
  const endDateInput = document.getElementById('end-date');

  // Set a default end date to be one week from today
  const defaultEndDate = new Date();
  defaultEndDate.setDate(defaultEndDate.getDate() + 7);
  endDateInput.valueAsDate = defaultEndDate;

  startDateInput.addEventListener('input', () => {
    // Ensure the end date cannot be before the start date
    if (startDateInput.valueAsDate > endDateInput.valueAsDate) {
      endDateInput.valueAsDate = startDateInput.valueAsDate;
    }
  });

  endDateInput.addEventListener('input', () => {
    // Ensure the start date cannot be after the end date
    if (endDateInput.valueAsDate < startDateInput.valueAsDate) {
      startDateInput.valueAsDate = endDateInput.valueAsDate;
    }
  });



 // chart graph  code 
  drawChart();

  async function drawChart(){
  const ctx = document.getElementById('myChart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan','Feb','jun','aug','sept','dec'],
      datasets: [{
        label : "Indent placed",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          // 'rgba(255, 159, 64, 0.6)',
          // 'rgba(255, 205, 86, 0.6)',
          // 'rgba(75, 192, 192, 0.6)',
          // 'rgba(54, 162, 235, 0.6)',
          // 'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          // 'rgb(255, 159, 64)',
          // 'rgb(255, 205, 86)',
          // 'rgb(75, 192, 192)',
          // 'rgb(54, 162, 235)',
          // 'rgb(153, 102, 255)',
          // 'rgb(201, 203, 207)'
        ],
        borderWidth: 1,
        fill : false,
       
      }]
    },
    options: {
      indexAxis: 'y',
      plugins: {
        title: {
            display: true,
            font: {
                family: 'Arial',
                size: 16,
                color: 'red'
            }
        },
        legend: {
            labels: {
                font: {
                    family: 'Helvetica',
                    size: 14,
                    color: 'gray'
                }
            }
        },
      
      scales: {
        x: {
          ticks: {
              color: 'blue'
          }
      },
        y: {
          ticks:{
            color :'green'
          },
        },
        beginAtZero: true,
      }
    }
  }
  })
}



  //indent cancellation charge 

  const ctx1 = document.getElementById('myChart1');
  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May','jun','jul','Aug','Sept','Oct','Nov','dec'],
      datasets: [{
        label : "Indent placed",
        data: [12, 19, 3, 5, 2, 3],
         backgroundColor: [
        //   'rgba(255, 99, 132, 0.6)',
        //   'rgba(255, 159, 64, 0.6)',
        //   'rgba(255, 205, 86, 0.6)',
        //   'rgba(75, 192, 192, 0.6)',
             'rgba(54, 162, 235, 0.6)',
          // 'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          // 'rgb(255, 99, 132)',
          // 'rgb(255, 159, 64)',
          // 'rgb(255, 205, 86)',
          // 'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          // 'rgb(153, 102, 255)',
          // 'rgb(201, 203, 207)'
        ],
        borderWidth: 1,
        fill : false,
       
      }]
    },
    options: {
      indexAxis: 'x',
      plugins: {
        title: {
            display: true,
            font: {
                family: 'Arial',
                size: 16,
                color: 'red'
            }
        },
        legend: {
            labels: {
                font: {
                    family: 'Helvetica',
                    size: 14,
                    color: 'gray'
                }
            }
        },
      
      scales: {
        x: {
          ticks: {
              color: 'blue'
          }
      },
        y: {
          ticks:{
            color :'green'
          },
        },
        beginAtZero: true,
      }
    }
  }
  })



  const ctx4 = document.getElementById('myChart2');
  new Chart(ctx4, {
    type: 'bar',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May','jun','jul','Aug','Sept','Oct','Nov','dec'],
      datasets: [{
        label : "Top 10 company",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1,
        fill : false,
       
      }]
    },
    options: {
      indexAxis: 'x',
      plugins: {
        title: {
            display: true,
            font: {
                family: 'Arial',
                size: 16,
                color: 'red'
            }
        },
        legend: {
            labels: {
                font: {
                    family: 'Helvetica',
                    size: 14,
                    color: 'gray'
                }
            }
        },
      
      scales: {
        x: {
          ticks: {
              color: 'blue'
          }
      },
        y: {
          ticks:{
            color :'green'
          },
        },
        beginAtZero: true,
      }
    }
  }
  })




  const ctx3 = document.getElementById('myChart3');
  new Chart(ctx3, {
    type: 'line',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May','jun','jul','Aug','Sept','Oct','Nov','dec'],
      datasets: [{
        label : "Indent Cancaled",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          // 'rgba(255, 99, 132, 0.6)',
          // 'rgba(255, 159, 64, 0.6)',
          // 'rgba(255, 205, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          // 'rgba(54, 162, 235, 0.6)',
          // 'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          // 'rgb(255, 99, 132)',
          // 'rgb(255, 159, 64)',
          // 'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          // 'rgb(54, 162, 235)',
          // 'rgb(153, 102, 255)',
          // 'rgb(201, 203, 207)'
        ],
        // borderWidth: 1,
        tension :0.4,
        fill : false,
       
      }]
    },
    options: {
      indexAxis: 'x',
      plugins: {
        title: {
            display: true,
            font: {
                family: 'Arial',
                size: 16,
                color: 'red'
            }
        },
        legend: {
            labels: {
                font: {
                    family: 'Helvetica',
                    size: 14,
                    color: 'gray'
                }
            }
        },
      
      scales: {
        x: {
          ticks: {
              color: 'blue'
          }
      },
        y: {
          ticks:{
            color :'green'
          },
        },
        beginAtZero: true,
      }
    }
  }
  })


  //pie chart 

  const ctx2 = document.getElementById('pieChart');
  new Chart(ctx2, {
    type: 'pie',
    data: {
      labels: ['Indent placed' ,'Indent Executed','indent Cancelled'],
      datasets: [{
        label : "Indent",
        data: [200,55,145],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235,0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235,)',
          'rgb(75, 192, 192,)',
          
        ],
        borderWidth: 1,
        fill : false,
       
      }]
    },
    options: {
      indexAxis: 'x',
      plugins: {
        title: {
            display: true,
            font: {
                family: 'Arial',
                size: 16,
                color: 'red'
            }
        },
        legend: {
            labels: {
                font: {
                    family: 'Helvetica',
                    size: 14,
                    color: 'gray'
                }
            }
        },
      
      scales: {
        x: {
          ticks: {
              color: 'blue'
          }
      },
        y: {
          ticks:{
            color :'green'
          },
        },
        beginAtZero: true,
      }
    }
  }
  })