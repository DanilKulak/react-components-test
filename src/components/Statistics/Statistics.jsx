import StatisticItem from "./StatisticsItem";

const Statistics = ({title, stats}) => {
return (
    <>
{title && <h2 className="title">{title}</h2>}

<ul className="stat-list">
{stats.map(({id, label, percentage}) => (
    <StatisticItem key={id} label={label} percentage={percentage}/>
))}
</ul>
    </>
)
}
export default Statistics;