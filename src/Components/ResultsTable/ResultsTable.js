const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

export default function ResultsTable(props) {
  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((e) => (
            <tr>
              <td>{e.year}</td>
              <td>{formatter.format(e.savingsEndOfYear)}</td>
              <td>{formatter.format(e.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  e.savingsEndOfYear -
                    e.yearlyContribution * e.year -
                    e.initialInvestment
                )}
              </td>
              <td>
                {formatter.format(
                  e.initialInvestment + e.yearlyContribution * e.year
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
