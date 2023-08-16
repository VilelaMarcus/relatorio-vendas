
import { Box, MenuItem, Select } from "@mui/material";
import { MyResponsiveLine } from '../ResponsiveLine';
import { useEffect, useState } from "react";
import { products as productData, marcas as brandData } from "../../data/data";


const Dashboad = () =>{
    const [category, setCategory] = useState('Roupa');
    
    const [product, setProduct] = useState('');
    const [productToShow, setProductToShow] = useState([]);


    const [brand, setBrand] = useState('');
    const [brandToShow, setBrandToShow] = useState([]);
    

    const [lineData, setLineData] = useState()

    useEffect(() => {
      const payload = productData.find(e => {
        if(e.type === category) return e.products;
      })

      setProductToShow(payload?.products);
      setProduct(payload?.products[0]);
    }, [category])
    
    useEffect(() => {
      const payload = brandData.filter(brand => {
        if(brand.type === product) return brand.marca;
      })

      const brands = payload?.map(e => e.marca)
     
      setDataChart(payload)
      setBrandToShow(brands)
      setBrand(brands[0])
    }, [product])


  const setDataChart = (payload) => {
    const vendas = payload?.map(e => e.vendas)

    if(vendas[0])
    {
      const dataChart = [
        {
          id: "VENDAS",
          data: Object.keys(vendas[0]).map(month => {
            return {
              x: month,
              y: vendas[0][month]
            };
          })
        }
      ];
      setLineData(dataChart)
    }
  } 
    
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }

  const handleProductChange = (event) => {
    setProduct(event.target.value);
  }

  const handleBrandChange = (event) => {
    const value = event.target.value

    const payload = brandData.filter(e => {
      if(e.marca === value) return e;
    })

    setDataChart(payload)
    setBrand(value);
  }
  
    return (
      <Box m="20px">
        <Box sx={{ display: 'flex',  paddingX: 20, justifyContent: 'space-between'}}>
          <Box sx={{ minWidth: 120 }}>
            <Select
            value={category}
            label="Categoria"
            onChange={handleCategoryChange}
            >
              <MenuItem value={'Roupa'}>Roupa</MenuItem>
              <MenuItem value={'Alimento'}>Alimento</MenuItem>
            </Select>
          </Box>
          <Box sx={{ minWidth: 120 }}>
            <Select
              value={product}
              onChange={handleProductChange}
            >
              {productToShow.map((e) => {
                return (
                  <MenuItem 
                    key={e}
                    value={e}
                  >
                    {e}
                  </MenuItem>
                  )
              })

              }
            </Select>
          </Box>
          <Box sx={{ minWidth: 120 }}>
            <Select
            value={brand}
            onChange={handleBrandChange}
            >
              {brandToShow.map((brand) => {
                return (
                  <MenuItem 
                    key={brand}
                    value={brand}
                  >
                    {brand}
                  </MenuItem>
                  )
              })

              }
            </Select>
          </Box>
        </Box>

        <Box height="75vh">
          {lineData && ( <MyResponsiveLine data={lineData}/> )}
        </Box>


      </Box>
    );
}

export default Dashboad;