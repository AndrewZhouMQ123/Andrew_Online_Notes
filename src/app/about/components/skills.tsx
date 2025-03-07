interface SkillProps {
  data: { skill: string; proficiency: string }[];
  title: string;
}

const Skills = ({ data, title }: SkillProps) => {
  return (
    <div className="table-wrap">
      <table>
        <caption>{title}</caption>
        <thead>
          <tr>
            <th>Skill</th>
            <th>Proficiency</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.skill}</td>
              <td>{item.proficiency}</td>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default Skills;
