import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import { MOCK_DATA } from '../utils';

import { CustomSlider } from '../components';

import { Button, IconButton } from '@mui/material';
import { VisibilityOff, InfoOutlined } from '@mui/icons-material';

const Home: NextPage = () => {
  const valueLabelFormat = (value: number) => `${value}%`

  return (
    <div className={styles.container}>

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

      <div className={styles.row}>
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

    </div>
  )
}

export default Home
