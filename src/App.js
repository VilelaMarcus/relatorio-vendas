
import './App.css';
import { Box } from "@mui/material";
import { MyResponsiveLine } from './components/ResponsiveLine';




function App() {

  const dataChart =[
    {
      "id": "japan",
      "data": [
        {
          "x": "plane",
          "y": 24
        },
        {
          "x": "helicopter",
          "y": 39
        },
        {
          "x": "boat",
          "y": 67
        },
        {
          "x": "train",
          "y": 71
        },
      ]
    }
]



  return (
    <Box m="20px">
      Teste
      <Box height="75vh">
        <MyResponsiveLine data={dataChart}/>
      </Box>
    </Box>
  );
}

export default App;
