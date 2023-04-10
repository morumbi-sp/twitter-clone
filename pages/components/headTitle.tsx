interface Props {
  firstLine: string;
  boldText?: string;
  secondLine: string;
}

const HeadTitle = ({ firstLine, boldText, secondLine }: Props) => {
  return (
    <div className='px-6 mt-2 text-3xl font-thin text-white'>
      <h1>
        {firstLine} <span className='font-medium'>{boldText}</span>{' '}
      </h1>
      <h1>{secondLine}</h1>
    </div>
  );
};

export default HeadTitle;
