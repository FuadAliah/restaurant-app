import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import { SizesProps } from '../../types'
import { currency } from '../../Utils/Utils'
import styles from './styles.module.css'

const SizesList = ({ sizes }: SizesProps) => {
  return (
    <Box className={styles.sizes}>
      <Typography variant="h6" color="primary" fontWeight="500">Select Size</Typography>

      <FormControl className={styles.container}>
        <RadioGroup name="radio-group">
          {sizes?.map((size, index) => (
            <Box className={styles.size} key={index}>
              <FormControlLabel value={size.size} control={<Radio />} label={size.size} />
              <Typography variant="subtitle1" color="primary" fontWeight='500'>{currency(size.price)}</Typography>
            </Box>
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  )
}

export default SizesList