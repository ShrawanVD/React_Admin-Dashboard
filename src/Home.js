import { IoIosCash, IoIosWallet } from "react-icons/io";
import { BsCart3, BsListCheck } from "react-icons/bs";
import { BarChart, Bar, XAxis } from "recharts";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProductTable from './ProductTable';
import React, { useState, useEffect } from 'react';

function Home() {
  const CustomBar = (props) => {
    const { x, y, width, height } = props;
    const radius = 10;

    return (
      <path
        d={`M${x},${y + radius} L${x},${y + height} Q${x},${
          y + height + radius
        } ${x + radius},${y + height} L${x + width - radius},${y + height} Q${
          x + width
        },${y + height} ${x + width},${y + height - radius} L${x + width},${
          y + radius
        } Q${x + width},${y} ${x + width - radius},${y} L${
          x + radius
        },${y} Q${x},${y} ${x},${y + radius}`}
        fill={props.fill}
      />
    );
  };

  const renderBars = (props) => {
    return <Bar shape={<CustomBar />} {...props} />;
  };

  const data = [
    {
      name: "jan",
      value: 4000,
    },
    {
      name: "Feb",
      value: 3000,
    },
    {
      name: "March",
      value: 2000,
    },
    {
      name: "April",
      value: 2780,
    },
    {
      name: "May",
      value: 1890,
    },
    {
      name: "June",
      value: 2390,
    },
    {
      name: "July",
      value: 3490,
    },
    {
      name: "Aug",
      value: 3490,
    },
    {
      name: "Sept",
      value: 3490,
    },
    {
      name: "Oct",
      value: 3490,
    },
    {
      name: "Nov",
      value: 3490,
    },
    {
      name: "Dec",
      value: 3490,
    },
  ];

  let selectedOption = "Overview";


  // table

  const products = [
    { productName: 'Abstract 3D', stocks: 5, price: 30, totalSales: 150 },
    { productName: 'Sarphens Illustrations', stocks: 15, price: 20, totalSales: 300 },
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to check the screen width and set isSmallScreen
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 838); // You can adjust the screen width threshold as needed
    }

    // Attach the resize event listener
    window.addEventListener('resize', handleResize);

    // Initialize isSmallScreen on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="main-container">
      <div className="main-cards">
        <div className="card">
          <div className="card-icons">
            <IoIosCash className="card_icon" />
          </div>
          <div className="card-content">
            <p style={{ color: "grey", marginBottom: "0" }}>Earning</p>
            <h3 style={{ marginBottom: "0" }}>$198K</h3>
            <span>
              <span style={{ color: "green" }}>▲ 37.8%</span> this month
            </span>
          </div>
        </div>
        <div className="card">
          <div className="card-icons">
            <BsListCheck className="card_icon" />
          </div>
          <div className="card-content">
            <p style={{ color: "grey", marginBottom: "0" }}>Orders</p>
            <h3 style={{ marginBottom: "0" }}>$2.4K</h3>
            <span>
              <span style={{ color: "red" }}>▼ 2%</span> this month
            </span>
          </div>
        </div>
        <div className="card">
          <div className="card-icons">
            <IoIosWallet className="card_icon" />
          </div>
          <div className="card-content">
            <p style={{ color: "grey", marginBottom: "0" }}>Balance</p>
            <h3 style={{ marginBottom: "0" }}>$2.4K</h3>
            <span>
              <span style={{ color: "red" }}>▼ 2%</span> this month
            </span>
          </div>
        </div>
        <div className="card">
          <div className="card-icons">
            <BsCart3 className="card_icon" />
          </div>
          <div className="card-content">
            <p style={{ color: "grey", marginBottom: "0" }}>Total Sales</p>
            <h3 style={{ marginBottom: "0" }}>$89K</h3>
            <span>
              <span style={{ color: "green" }}>▲ 11%</span> this week
            </span>
          </div>
        </div>
      </div>

      {/* bar chart */}

      <div className="charts">
        <div className="left-chart">
          <div className="navbar-inside-chart">
            <div className="left-heads">
              <p style={{ color: "black", marginBottom: 0 }}>Overview</p>
              <p style={{ color: "grey" }}>Monthly Earning</p>
            </div>
            <div className="right-heads">
              <select
                style={{
                  border: "none",
                  borderRadius: "5px",
                  background: "rgba(220, 220, 220, 0.5)",
                  padding: "4px",
                }}
                value={selectedOption}
              >
                <option value="Quaterly">Quaterly</option>
                <option value="Half">Half</option>
                <option value="Annualy">Annualy</option>
              </select>
            </div>
          </div>
          <BarChart
            width={isSmallScreen ? 360 : 800}
            height={250}
            data={data}
            style={
              { background: "white" }          
          }
          >
            {renderBars({ dataKey: "value", fill: "purple" })}
            <XAxis dataKey="name" />
          </BarChart>
        </div>

        {/* pie chart */}
        <div className="right-chart">
          <div className="left-heads">
            <p style={{ color: "black", marginBottom: 0 }}>Customers</p>
            <p style={{ color: "grey" }}>Customers that buy product</p>
          </div>
          <div className="pie-chart">
            <CircularProgressbarWithChildren value={66}>
              <div style={{ fontSize: 12, marginTop: -5 }}>
                <strong>
                  <h2 style={{ textAlign: "center" }}>65%</h2>
                </strong>{" "}
                Total new Customers
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>

        {/* product tables */}

        
      </div>

      <div className="table">
          <ProductTable products={products} />
        </div>
    </main>
  );
}

export default Home;
