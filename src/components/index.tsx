import styles from '../styles/Main.module.css'
import { allAssets } from '../constants'
import { getLogoSvgUrl } from '../utils';
import { 
  Slider,
  styled,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  tableCellClasses,
  TooltipProps,
  Tooltip,
  tooltipClasses
} from '@mui/material'
import { Doughnut } from 'react-chartjs-2'
import { Chart, LinearScale, ArcElement } from 'chart.js'
import { BorrowPosition } from '../types';
Chart.register(LinearScale, ArcElement)

interface Props {
  data: BorrowPosition[]
}

export const Graph = ({ data }: Props) => {
  // Generating chart data from mock data
  const _data = {
    labels: data.map((asset: BorrowPosition) => asset.symbol),
    datasets: [{
      data: data.map((asset: BorrowPosition) => Number(asset.borrow)),
      backgroundColor: data.map((asset: BorrowPosition) => allAssets[asset.symbol as keyof typeof allAssets].color),
      borderWidth: 0,
      cutout: '85%',
      borderRadius: 20,
      offset: 25
    }]
  };

  return <Doughnut data={_data} options={{
    layout: {
      padding: 12.5
    }
  }}/>
}

export const CustomSlider = styled(Slider)(() => ({
  '& .MuiSlider-valueLabel': {
    fontSize: '12px',
    fontFamily: 'DM Sans Regular',
    backgroundColor: 'unset',
    top: 0,
  }
}))

export const TableView = ({ data }: Props) => {
  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#14183c',
      border: 'none !important'
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: '16px',
      border: 'none !important'
    }
  }))

  const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd)': {
      backgroundColor: '#0c0f26',
    }
  }));

  return <TableContainer className={styles.tableContainer}>
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
            <div className={styles.assetContainer}>
              <img src={getLogoSvgUrl(asset.symbol)} className={styles.iconLarge}/>
              {asset.symbol}
            </div>
            <div className={styles.valueContainer}>
              <div className={styles.assetContainer}>
                <img src="/images/morpho-icon.png" className={styles.iconSmall}/>
                +{asset.morphoRewards}
              </div>
            </div>
          </StyledTableCell>
          <StyledTableCell>{asset.borrow}</StyledTableCell>
          <StyledTableCell>{(Number(asset.poolAPY) * 100).toFixed(2)}%</StyledTableCell>
          <StyledTableCell>
            <div className={styles.p2pCell}>
              {(Number(asset.userAPY) * 100).toFixed(2)}%
              <img src="/images/p2p.svg"/>
            </div>
          </StyledTableCell>
        </StyledTableRow>)}
      </TableBody>
    </Table>
  </TableContainer>
}

export const InfoTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#232559',
    fontSize: 14,
    fontFamily: 'DM Sans Regular',
    padding: '10px 15px',
    textTransform: 'none !important',
    borderRadius: '10px'
  },
  [`& .${tooltipClasses.arrow}`]: {
    "&::before": {
      backgroundColor: '#232559',
    }
  }
}));