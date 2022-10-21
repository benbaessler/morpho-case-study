import styles from '../styles/Home.module.css'
import { MOCK_DATA, getLogoSvgUrl } from '../utils';
import { 
  Slider,
  styled,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  tableCellClasses
} from '@mui/material'
import { AddRoadTwoTone } from '@mui/icons-material';


export const CustomSlider = styled(Slider)(() => ({
  '& .MuiSlider-valueLabel': {
    fontSize: '12px',
    fontFamily: 'DM Sans Regular',
    backgroundColor: 'unset',
    top: 0,
  }
}))

export const AssetsTable = () => {
  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#14183c'
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: '16px',
    }
  }))

  const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd)': {
      backgroundColor: '#0c0f26',
    }
  }));

  return <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <StyledTableCell>Assets</StyledTableCell>
          <StyledTableCell>Borrow</StyledTableCell>
          <StyledTableCell>Compound APY</StyledTableCell>
          <StyledTableCell>Your APY</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {MOCK_DATA.markets.map((asset: any, index: number) => <StyledTableRow 
          key={asset.symbol}
          style={{ background: index % 2 ? '#14183c' : '#0c0f26' }}
        >
          <StyledTableCell component="th" scope="row" >
            <div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={getLogoSvgUrl(asset.symbol)} className={styles.iconLarge}/>
                {asset.symbol}
              </div>
              <div className={styles.valueContainer}>
              <img src={getLogoSvgUrl(asset.symbol)} className={styles.iconLarge}/>
                +{asset.morphoRewards}
              </div>
            </div>
          </StyledTableCell>
          <StyledTableCell>{asset.borrow}</StyledTableCell>
          <StyledTableCell>{asset.poolAPY}</StyledTableCell>
          <StyledTableCell>{asset.userAPY}</StyledTableCell>
        </StyledTableRow>)}
      </TableBody>
    </Table>
  </TableContainer>
}