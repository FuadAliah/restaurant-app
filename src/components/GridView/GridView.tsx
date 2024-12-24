import { useRef, useState } from 'react';
import { Card, CardContent, Fab, Typography } from '@mui/material'
import styles from './styles.module.css';
import { Plus } from 'lucide-react';
import { currency } from '../../Utils/Utils';
import ItemDetailed from '../ItemDetailed';
import { ItemData, GridViewProps } from '../../types'

const GridView = ({ data, selectedCategory }: GridViewProps) => {
	const [isSmooth, setIsSmooth] = useState<boolean>(false);
	const listRef = useRef<HTMLDivElement>(null);
	const isDragging = useRef(false);
	const startY = useRef<number>(0);
	const scrollTop = useRef(0);

	const [selectedItem, setSelectedItem] = useState<ItemData | undefined>()

	const handleClose = () => {
		setSelectedItem(undefined)
	}

	const handleMouseDown = (e: React.MouseEvent) => {
		if (listRef.current) {
			isDragging.current = true;
			startY.current = e.pageY - listRef.current.offsetTop;
			scrollTop.current = listRef.current.scrollTop;
			setIsSmooth(false);
		}
	};

	const handleMouseLeaveOrUp = () => {
		if (isDragging.current) {
			isDragging.current = false;
			setIsSmooth(false);
		}
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging.current || !listRef.current) return;
		e.preventDefault();

		const y = e.pageY - listRef.current.offsetTop;
		const walk = y - startY.current;
		listRef.current.scrollTop = scrollTop.current - walk;
	};

	return (
		<div className={`${styles.container} ${isSmooth ? styles.ease : ''}`}
			ref={listRef}
			onMouseDown={handleMouseDown}
			onMouseLeave={handleMouseLeaveOrUp}
			onMouseUp={handleMouseLeaveOrUp}
			onMouseMove={handleMouseMove}>
			{(selectedCategory ? data.filter(item => item?.category === selectedCategory?.name) : data).map((item, index) => (
				<Card key={index} className={styles.item} style={{ backgroundImage: `url(${item.image})` }} onClick={() => setSelectedItem(item)}>
					<CardContent className={styles.content}>
						<Typography variant="body1">{item.title}</Typography>
						<Typography variant="h6">{currency(item.price)}</Typography>
						<Fab size="small" color="secondary"><Plus /></Fab>
					</CardContent>
				</Card>
			))}
			<ItemDetailed item={selectedItem} handleClose={handleClose} />
		</div>
	)
}

export default GridView