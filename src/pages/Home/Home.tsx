import { useState } from 'react';
import { Box, IconButton, TextField } from '@mui/material'
import { LogoType } from '../../images';
import { AlignJustify } from 'lucide-react';
import theme from '../../Utils/Theme';
import SideMenu from '../../components/SideMenu';
import ListView from '../../components/ListView/ListView';
import GridView from '../../components/GridView/GridView';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import { categories, items } from '../../response';
import { Category } from '../../types';

import styles from './styles.module.css';

const Home = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false)
	const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

	const openMenu = (): void => setShowMenu(true)
	const closeMenu = (): void => setShowMenu(false);

	return (
		<Box className={styles.page}>

			{showMenu && <SideMenu className={`${styles.sideMenu} ${showMenu ? 'in' : 'out'}`} closeMenu={closeMenu} />}

			<Box className={styles.header}>
				<LogoType />
				<IconButton aria-label="delete">
					<AlignJustify size={32} color={theme.palette.common.white} onClick={openMenu} />
				</IconButton>
				<TextField id="outlined-basic" className={styles.search} label="What are you craving today?" variant="filled" />
			</Box>

			<Box className={styles.body}>
				<ListView data={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
				<GridView data={items} selectedCategory={selectedCategory} />
			</Box>

			<BottomSheet />

		</Box>
	)
}

export default Home