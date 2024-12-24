import { Badge, Box, Fab, Typography } from "@mui/material"
import styles from './styles.module.css'
import { ShoppingCart } from "lucide-react"
import { currency } from "../../Utils/Utils"

const BottomSheet = () => {
  return (
    <Box className={styles.sheet}>
      <Box className={styles.amount}>
        <Badge badgeContent={4} color="primary">
          <ShoppingCart className={styles.icon} width={20} />
        </Badge>
        <Box className={styles.info}>
          <Typography variant="caption" color='GrayText'>Total Amount</Typography>
          <Typography variant="h5" fontWeight='800'>{currency(2.5)}</Typography>
        </Box>
      </Box>
      <Box className={styles.action}>
        <Fab variant="extended" size="large" color="primary" style={{ paddingInline: '2rem', borderRadius: '1.5rem', }}>
          Checkout
        </Fab>
      </Box>
    </Box>
  )
}

export default BottomSheet