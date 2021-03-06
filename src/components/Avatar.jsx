import { motion } from "framer-motion";

import styles from "./styles/Avatar.module.scss";

function Avatar(props) {
	const { src, inNav } = props;

	return (
		<motion.img
			className={inNav ? styles.small : styles.large}
			src={src}
			layoutId="avatar"
		/>
	);
}

export default Avatar;
