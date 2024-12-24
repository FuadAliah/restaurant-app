import { useState } from "react"
import { Box, Button, Card, Fab, Typography } from "@mui/material"
import { Minus, Plus, X } from "lucide-react"
import styles from "./styles.module.css"
import { ItemProps } from '../../types'
import SizesList from "../SizesList/SizesList"

const ItemDetailed = ({ item, handleClose }: ItemProps) => {
	const [count, setCount] = useState(1)

	return (
		<Box className={`${styles.item} ${item ? styles.easeIn : styles.easeOut}`} >
			<Card className={styles.image} style={{ backgroundImage: `url(${item?.image})` }} >
				<Fab className={styles.fab} size="small" onClick={() => handleClose()}>
					<X className={styles.close} />
				</Fab>
			</Card>

			<Box className={styles.info}>
				<Box className={styles.first}>
					<Typography variant="h5" color="primary" fontWeight="500">{item?.title}</Typography>
					<Box className={styles.counter} component="div">
						<Fab className={styles.operator} size="small">
							<Minus width={16} />
						</Fab>
						<Typography variant="h6" color="primary" fontWeight="400">{count}</Typography>
						<Fab className={styles.operator} size="small">
							<Plus width={16} />
						</Fab>
					</Box>
				</Box>
				<Typography variant="body2" className={styles.description}>{item?.description}</Typography>
			</Box>

			{item?.sizes && (
				<SizesList sizes={item.sizes} />
			)}

			<Box className={styles.sticky}>
				<Button className={styles.addToCart} fullWidth variant="contained" color="primary" sx={{
					display: 'flex',
					justifyContent: 'space-between',
					padding: '1rem 1.5rem',
					borderRadius: '3rem'
				}}>
					<Typography variant="body1">Add to Cart</Typography>
					<Typography variant="body1">JOD 3.45</Typography>
				</Button>
			</Box>
		</Box>
	)
}

export default ItemDetailed