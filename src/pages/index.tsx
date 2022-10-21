import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import { MOCK_DATA } from '../utils';

import { CustomSlider, AssetsTable } from '../components';

import { Button, IconButton } from '@mui/material';
import { VisibilityOff, InfoOutlined } from '@mui/icons-material';

const Home: NextPage = () => {
  const valueLabelFormat = (value: number) => `${value}%`

  return (
    <div className={styles.container} style={{
      width: '500px',
      height: '700px',
      justifyContent: 'space-between'
    }}>
      <div>
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
      </div>

      <div>
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

        <div className={styles.container} style={{ 
          minHeight: '200px',
          padding: 0
        }}>
          <AssetsTable/>
        </div>
      </div>

    </div>
  )
}

export default Home
