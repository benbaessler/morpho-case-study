import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import { MOCK_DATA } from '../utils';

import { CustomSlider, AssetsTable, AssetGraph } from '../components';

import { Button, IconButton } from '@mui/material';
import { VisibilityOff, InfoOutlined, Add } from '@mui/icons-material';

const Home: NextPage = () => {
  const valueLabelFormat = (value: number) => `${value}%`

  return (
    <div className={styles.container} style={{
      width: '550px',
      justifyContent: 'space-between'
    }}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <span>
            <h1>Borrow</h1>
          </span>
          <span style={{ justifyContent: 'center' }}>
            <Button variant="text" startIcon={<VisibilityOff/>} className={styles.button}>
              USD Value
            </Button>
          </span>
          <span style={{ justifyContent: 'flex-end' }}>
            <IconButton aria-label="help" className={styles.button}>
              <InfoOutlined fontSize="small"/>
            </IconButton>
          </span>
        </div>
        <AssetGraph />
      </div>

      <div className={styles.container2}>
        <div className={styles.row} style={{ marginBottom: '10px' }}>
          <h3 style={{ marginRight: '10px' }}>Borrow Capacity</h3>
          <IconButton aria-label="help" className={styles.button} style={{ marginRight: '5px' }}>
            <InfoOutlined fontSize="small"/>
          </IconButton>
          <CustomSlider
            disabled
            track={false}
            value={Number(Number(MOCK_DATA.borrowCapacity).toFixed(3))}
            valueLabelDisplay="on"
            getAriaValueText={valueLabelFormat}
            valueLabelFormat={valueLabelFormat}
          />
        </div>

        <div className={styles.tableContainer} style={{ 
          minHeight: '200px',
          padding: 0
        }}>
          <AssetsTable/>
          <div className={styles.center}>
            {MOCK_DATA.markets.length === 0 ? <Button variant="text" endIcon={<Add/>} className={styles.button2}>
              Borrow a new asset
            </Button> : <></>}
          </div>
        </div>
        <Button variant="text" endIcon={<Add/>} className={styles.button2}>
          Borrow a new asset
        </Button>
      </div>

    </div>
  )
}

export default Home
