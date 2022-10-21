import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Button, IconButton } from '@mui/material';
import { VisibilityOff, InfoOutlined } from '@mui/icons-material';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <span>
          <h1 className={styles.title}>Borrow</h1>
        </span>
        <span style={{ justifyContent: 'center' }}>
          <Button variant="text" startIcon={<VisibilityOff/>} className={styles.button}>
            USD Value
          </Button>
        </span>
        <span style={{ justifyContent: 'flex-end' }}>
          <IconButton aria-label="help" className={styles.button}>
            <InfoOutlined/>
          </IconButton>
        </span>
      </div>
    </div>
  )
}

export default Home
