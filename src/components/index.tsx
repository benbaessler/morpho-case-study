import { Slider, styled } from '@mui/material'

export const CustomSlider = styled(Slider)(() => ({
  '& .MuiSlider-valueLabel': {
    fontSize: '12px',
    fontFamily: 'DM Sans Regular',
    backgroundColor: 'unset',
    top: 0,
  }
}))