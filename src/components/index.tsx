import styles from '../styles/Home.module.css'
import { MOCK_DATA, getLogoSvgUrl, allAssets } from '../utils';
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
import { Doughnut } from 'react-chartjs-2'
import { Chart, LinearScale, ArcElement } from 'chart.js'
import { BorrowPosition } from '../types';
Chart.register(LinearScale, ArcElement)

interface Props {
  data: BorrowPosition[]
}

export const AssetGraph = ({ data }: Props) => {
  const _data = {
    labels: data.map((asset: any) => asset.symbol),
    datasets: [{
      data: data.map((asset: any) => Number(asset.borrow)),
      backgroundColor: data.map((asset: any) => allAssets[asset.symbol as keyof typeof allAssets].color),
      borderWidth: 0,
      cutout: '85%',
      borderRadius: 20,
      offset: 25
    }]
  };

  const options = {
    layout: {
      padding: 12.5
    }
  }

  return (
    <div className={styles.graphWrapper}>
      <Doughnut data={_data} options={options}/>
      <div className={styles.graphValue}>
        <h2>${Number(MOCK_DATA.totalUSD)}</h2>
        <h4><span>APY:</span> {Number(MOCK_DATA.globalAPY) * 100}%</h4>
      </div>
    </div>
  )
}

export const CustomSlider = styled(Slider)(() => ({
  '& .MuiSlider-valueLabel': {
    fontSize: '12px',
    fontFamily: 'DM Sans Regular',
    backgroundColor: 'unset',
    top: 0,
  }
}))

export const AssetsTable = ({ data }: Props) => {
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

  return <TableContainer style={{ borderRadius: '10px', maxHeight: '310px' }}>
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <StyledTableCell>Assets</StyledTableCell>
          <StyledTableCell>Borrow</StyledTableCell>
          <StyledTableCell>Compound APY</StyledTableCell>
          <StyledTableCell>Your APY</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((asset: BorrowPosition, index: number) => <StyledTableRow 
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
              <img src="/images/morpho-icon.png" className={styles.iconSmall}/>
                +{asset.morphoRewards}
              </div>
            </div>
          </StyledTableCell>
          <StyledTableCell>{asset.borrow}</StyledTableCell>
          <StyledTableCell>{(Number(asset.poolAPY) * 100).toFixed(2)}%</StyledTableCell>
          <StyledTableCell className={styles.blueText}>{(Number(asset.userAPY) * 100).toFixed(2)}%</StyledTableCell>
        </StyledTableRow>)}
      </TableBody>
    </Table>
  </TableContainer>
}