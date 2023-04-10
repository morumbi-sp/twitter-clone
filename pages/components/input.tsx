interface Props {
  id: string;
  title: string;
  type: 'text' | 'password';
}

const Input = ({ title, id, type }: Props) => {
  return (
    <div className='flex flex-col space-y-2'>
      <label className='text-myText-light text-sm' htmlFor={id}>
        {title}
      </label>
      <input
        className='text-sm border-gray-200 rounded-xl focus:border-banana focus:ring-banana'
        id={id}
        type={type}
      />
    </div>
  );
};

export default Input;
