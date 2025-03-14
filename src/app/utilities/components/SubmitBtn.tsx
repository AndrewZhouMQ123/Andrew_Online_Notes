import formstyles from "@/app/ui/forms.module.css";

interface SubmitBtnProps {
  disabled?: boolean; // Define the disabled prop
}

const SubmitBtn = ({ disabled }: SubmitBtnProps) => {
  return (
    <button className={formstyles.formBtn} type="submit" disabled={disabled}>
      Generate Plot
    </button>
  );
};

export default SubmitBtn;
