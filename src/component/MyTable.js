import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const MyTable = ({ items, assetClass }) => {
  const showAverage = assetClass !== "Cash"&&assetClass !== "Loan";
  const showMarket = assetClass !== "Cash" ;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: "lightblue" }}>
            <TableCell>NAME OF THE HOLDING</TableCell>
            <TableCell>TICKER</TableCell>
            {showAverage && (
              <>
                <TableCell>AVERAGE PRICE</TableCell>
    
              </>
            )}
            {showMarket && (
              <>
                <TableCell>MARKET PRICE</TableCell>
              </>
            )}
            <TableCell>LATEST CHANGED PERCENTAGE</TableCell>
            <TableCell>MARKET VALUE IN BASE CCY</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index) => (
            <TableRow
              key={index}
              style={{ backgroundColor: index % 2 === 0 ? "#BFEFFF" : "white" }}
            >
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.ticker}</TableCell>
              {showAverage && (
                <>
                  <TableCell>{item.avg_price}</TableCell>
                  
                </>
              )}
              {showMarket && (
                <>
                 
                  <TableCell>{item.market_price}</TableCell>
                </>
              )}
              <TableCell style={{ color: parseFloat(item.latest_chg_pct) < 0 ? "red" : "inherit" }}>
                {item.latest_chg_pct}
              </TableCell>
              <TableCell>{item.market_value_ccy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
