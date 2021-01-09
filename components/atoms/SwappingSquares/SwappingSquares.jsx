import classes from './style.module.css';

const SwappingSquares = () => {
	return (
		<div className={classes.swappingSquaresSpinner}>
			<div className={classes.square} />
			<div className={classes.square} />
			<div className={classes.square} />
			<div className={classes.square} />
		</div>
	);
};

export default SwappingSquares;
