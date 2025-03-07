interface CertProps {
  data: { certificate: string; date: string }[];
  title: string;
}

const Certificates = ({ data, title }: CertProps) => {
  return (
    <div className="table-wrap">
      <table>
        <caption>{title}</caption>
        <thead>
          <tr>
            <th>Certificate</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.certificate}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default Certificates;
