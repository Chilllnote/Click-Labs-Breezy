import React from 'react';

interface StatItem {
    value: string;
    label: string;
}

const statsData: StatItem[] = [
    { value: '12M+', label: 'Breaths facilitated' },
    { value: '99.97%', label: 'Oxygen uptime SLA' },
    { value: '47', label: 'Countries served' },
    { value: '0', label: 'Customers who stopped breathing*' },
];

const Stats: React.FC = () => {
    return (
        <section className="stats">
            <div className="stats-grid">
                {statsData.map((stat, index) => (
                    <div className="stat" key={index}>
                        <h2>{stat.value}</h2>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;