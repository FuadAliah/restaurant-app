import React, { useRef, useState } from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import styles from './styles.module.css';
import { ListViewProps } from '../../types'

const ListView = ({ data, selectedCategory, setSelectedCategory }: ListViewProps) => {
	// const [isCategorySelected, setIsCategorySelected] = useState<boolean>(false)

	// console.log('isCategorySelected', isCategorySelected)

	const [isSmooth, setIsSmooth] = useState<boolean>(false);
	const listRef = useRef<HTMLDivElement>(null);
	const isDragging = useRef(false);
	const startX = useRef<number>(0);
	const scrollLeft = useRef<number>(0);

	const handleMouseDown = (e: React.MouseEvent) => {
		if (listRef.current) {
			isDragging.current = true;
			startX.current = e.pageX - listRef.current.offsetLeft;
			scrollLeft.current = listRef.current.scrollLeft;
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

		const x = e.pageX - listRef.current.offsetLeft;
		const walk = x - startX.current;
		listRef.current.scrollLeft = scrollLeft.current - walk;
	};

	return (
		<div
			className={`${styles.slider} ${isSmooth ? 'ease' : ''}`}
			ref={listRef}
			onMouseDown={handleMouseDown}
			onMouseLeave={handleMouseLeaveOrUp}
			onMouseUp={handleMouseLeaveOrUp}
			onMouseMove={handleMouseMove}>
			{data?.map((category, index) => (
				<Card key={index} className={`${styles.card} ${selectedCategory?.name === category.name ? styles.selected : ""}`} onClick={() => {
					// setIsCategorySelected(selectedCategory?.name === category.name ? false : true)
					if (selectedCategory?.name === category.name) {
						setSelectedCategory(null)
					} else {
						setSelectedCategory(category);
					}
				}}>
					{category.image}
					<CardContent className={styles.content}>
						<Typography variant="body2">
							{category.name}
						</Typography>
					</CardContent>
				</Card>
			))}
		</div >
	)
}

export default ListView