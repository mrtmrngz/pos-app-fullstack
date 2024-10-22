
const CustomTable = ({data, columns, tableClass, tableKey}) => {

    return (
        <table className={`custom-table w-full ${tableClass ? tableClass : ""}`}>
            <thead>
            <tr>
                {columns.map(column => (
                    <th className={`${column.className}`} key={column.key} style={column.width && {width: `${column.width}`}}>{column.value}</th>
                ))}
            </tr>
            </thead>

            <tbody>
            {data.map(item => (
                <tr key={item[tableKey]} className="border border-border-color border-t-0">
                    {columns.map(column => (
                        <td key={column.key} className={`${column.className}`}>
                            {column.render(item)}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default CustomTable;