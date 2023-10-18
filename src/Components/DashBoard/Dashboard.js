import React, { useEffect, useRef, useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { FaDollarSign } from 'react-icons/fa';
import { GoNote } from 'react-icons/go';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { TbShoppingBag } from 'react-icons/tb';
import 'bootstrap/dist/css/bootstrap.min.css';

import CanvasJSReact from '@canvasjs/react-charts';
import Table from '../../Common/Table';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Dashboard() {

  const [columnBlockWidth, setCloumnBlockWidth] = useState("")
  console.log("columnBlockWidth: ", columnBlockWidth);
  const columnBarRef = useRef(null);
  const options = {
    axisX: {
      title: '',
      gridThickness: 0,
      gridColor: "white"
    },
    axisY: {
      gridThickness: 0,
      // labelFontColor: 'transparent', // Hide Y-axis labels
    },
    gridColor: 'transparent',
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Jan", y: 10, color: '#f2efff' },
          { label: "Feb", y: 15, color: '#f2efff' },
          { label: "Mar", y: 25, color: '#f2efff' },
          { label: "Apr", y: 30, color: '#f2efff' },
          { label: "May", y: 28, color: '#f2efff' },
          { label: "Jun", y: 28, color: '#f2efff' },
          { label: "Jul", y: 35, color: '#f2efff' },
          { label: "Aug", y: 38, color: '#5a32ea' },
          { label: "Sep", y: 28, color: '#f2efff' },
          { label: "Oct", y: 28, color: '#f2efff' },
          { label: "Nov", y: 28, color: '#f2efff' },
          { label: "Dec", y: 28, color: '#f2efff' },
        ],
      }
    ],
    theme: 'light2',
    animationEnabled: true,
    dataPointWidth: columnBlockWidth,
    cornerRadius: 20

  }

  function setColumnWidth() {
    const width = columnBarRef?.current?.clientWidth;
    console.log("width: ", width);
    // if (width < 640) {
    //   setCloumnBlockWidth(30)
      
    //   return
    // }
    // if (width < 482) {
    //   setCloumnBlockWidth(23)
    //   return
    // }
    // if (width < 362) {
    //   setCloumnBlockWidth(15)
    //   return
    // }

    setCloumnBlockWidth((width/18))
    // const rew = width / 
    // 540
  }

  useEffect(() => {
    setColumnWidth()
    window.addEventListener("resize", setColumnWidth)
  }, [])

  


  const pieChartOptions = {
    animationEnabled: true,
    title: {
      text: ""
    },
    subtitles: [{
      text: "65%",
      verticalAlign: "center",
      fontSize: 35,
      dockInsidePlotArea: true
    }],
    data: [{
      type: "doughnut",
      // showInLegend: true,
      // indexLabel: "{name}: {y}",
      yValueFormatString: "#,###'%'",
      startAngle: -90,
      dataPoints: [
        { name: "Unsatisfied", y: 60, color: "#f2419e" },
        { name: "Very Satisfied", y: 40, color: "#5e36ea" },
        { name: "Very Satisfied", y: 40, color: "#f1effc" },
      ]
    }]
  }

  return (
    <React.Fragment>
      <div className="dashboard-wrapper">
        <div className="dashboard-head">
          <p style={{ fontWeight: "900" }}>Hello Shahrukh👋,</p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white", padding: "8px 12px", borderRadius: "5px" }}>
            <BsSearch color='a4a8af' />
            <input placeholder='Search'></input>
          </div>
        </div>
        <div className="dashboard-content">
          <div className="first-section">
            <div className="cards">
              <div className='icon' style={{ backgroundColor: "#e9fef3" }}>
                <FaDollarSign color='#11b25c' size={50} />
              </div>
              <div>
                <span>Earnings</span>
                <p style={{ fontSize: "20px", margin: "0", fontWeight: "900" }}>$198k</p>
                <p style={{ fontSize: "12px", margin: "0" }}><span style={{ color: "#11b25c", fontWeight: "900" }}>+37.8% </span>this month</p>
              </div>
            </div>
            <div className="cards">
              <div className='icon' style={{ backgroundColor: "#e7dbff" }}>
                <GoNote color='#a301ff' size={50} />
              </div>
              <div>
                <span>Orders</span>
                <p style={{ fontSize: "20px", margin: "0", fontWeight: "900" }}>$2.4k</p>
                <p style={{ fontSize: "12px", margin: "0" }}><span style={{ color: "rgb(203 10 59)", fontWeight: "900" }}>+2% </span>this month</p>
              </div>
            </div>
            <div className="cards">
              <div className='icon' style={{ backgroundColor: "#ccf2ff" }}>
                <MdOutlineAccountBalanceWallet color='#0151bb' size={50} />
              </div>
              <div>
                <span>Balance</span>
                <p style={{ fontSize: "20px", margin: "0", fontWeight: "900" }}>$2.4k</p>
                <p style={{ fontSize: "12px", margin: "0" }}><span style={{ color: "rgb(203 10 59)", fontWeight: "900" }}>+37.8% </span>this month</p>
              </div>
            </div>
            <div className="cards">
              <div className='icon' style={{ backgroundColor: "#ffacd6" }}>
                <TbShoppingBag color='#d80011' size={50} />
              </div>
              <div>
                <span>Earnings</span>
                <p style={{ fontSize: "20px", margin: "0", fontWeight: "900" }}>$89k</p>
                <p style={{ fontSize: "12px", margin: "0" }}><span style={{ color: "#11b25c", fontWeight: "900" }}>+11% </span>this week</p>
              </div>
            </div>
          </div>
          <div className="second-section">
            <div className='overview' ref={columnBarRef}>
              {/* <img src={overview} alt="" /> */}

              <div className='overview-head'>
                <div>
                  <p style={{ margin: 0, fontSize: "20px", color: "black" }}>Overview</p>
                  <p style={{ margin: 0 }}>Monthly Earning</p>
                </div>
                <select name="cars" id="cars">
                  <option value="volvo">Quaterly</option>
                  <option value="volvo">Half Yearly</option>
                  <option value="volvo">Yearly</option>
                </select>
              </div>
              <div className="overview-body">
                <CanvasJSChart options={options}
                  containerProps={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
            <div className='customer'>
              {/* <img src={customer} alt="" /> */}
              <div className='customer-head'>
                <div>
                  <p style={{ margin: 0, fontSize: "20px", color: "black" }}>Customer</p>
                  <p style={{ margin: 0 }}>Customers that buy Products</p>
                </div>
              </div>
              <div className="customer-body">
                <CanvasJSChart options={pieChartOptions}
                  /* onRef={ref => this.chart = ref} */
                  containerProps={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </div>
          <div className="third-section">
            <div className="table-container">
              <div className="table">
                <div className="table-head">
                  <div className="table-title">Product Sell</div>
                  {/* <div className="table-desc">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgb(250 251 255)", padding: "8px 8px", borderRadius: "5px" }}>
                      <BsSearch color='a4a8af' />
                      <input style={{ backgroundColor: "rgb(250 251 255)" }} placeholder='Search'></input>
                    </div>
                    <select name="cars" id="cars">
                      <option value="volvo">Last 30days</option>
                      <option value="saab">Last 15days</option>
                      <option value="opel">Last 10days</option>
                      <option value="audi">Last 5days</option>
                    </select>
                  </div> */}
                </div>

                <div className='my-5'>
                  <Table />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </React.Fragment>
  )
}

export default Dashboard