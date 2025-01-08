import axios from 'axios';

export const handleSave = async (data: Record<string, string>[], title: string) => {
  const keys = Object.keys(data[0]);
  const key1 = keys[0];
  const key2 = keys[1];

  const html = `
    <h1>${title}</h1>
    <table>
      <thead>
        <tr>
          <th>${key1}</th>
          <th>${key2}</th>
        </tr>
      </thead>
      <tbody>
        ${data.map((item) => `
          <tr>
            <td>${item[key1]}</td>
            <td>${item[key2]}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  try {
    const response = await axios.post('/api/generatePDF',  { html, title }, { responseType: 'blob' });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title}.pdf`;
    a.click();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Failed to generate PDF. Please try again.');
  }
};