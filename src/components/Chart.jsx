import "../styles/Chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Chart = () =>{

    const data = [
        { 
          name: 'Jan', 
          amt: 400,
        },
        {
          name: 'Feb',
          amt: 1000,
        },
        {
          name: 'Mar',
          amt: 2290,
        },
        {
          name: 'Apr',
          amt: 1300,
        },
        {
          name: 'May',
          amt: 2181,
        },
        {
          name: 'Jun',
          amt: 950,
        },
        {
          name: 'July',
          amt: 2900,
        },
        {
            name: 'Aug',
            amt: 3100,
          },
          {
            name: 'Sep',
            amt: 3500,
          },
          {
            name: 'Oct',
            amt: 850,
          },
          {
            name: 'Nov',
            amt: 2100,
          },
          {
            name: 'Dec',
            amt: 3300,
          },
      ];


    return(
        <div className='Chart'> 
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                width={500}
                height={400}
                data={data}
                
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="amt" stroke="#3fb02b52" fill="#3fb02b52" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart;