import { forwardRef, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';

import styles from './styles.module.css';

type SideMenuProps = {
	closeMenu: () => void
	className: string;
}

const SideMenu = forwardRef<HTMLDivElement, SideMenuProps>(({ className, closeMenu }) => {
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				closeMenu();
			}
		};
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box ref={menuRef} className={`${styles.page} ${className}`}>
			<Typography>Fuad</Typography>
		</Box>

	);
})

export default SideMenu