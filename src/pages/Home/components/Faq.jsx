import Accordion from "./Accordion";

export default function Faq() {

  const faq = [
    {
      'id': 1,
      'question': 'Why should I use CodeBook?',
      'answer': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus earum dicta nesciunt, nulla alias consequuntur cumque incidunt saepe mollitia esse! Magni praesentium delectus excepturi nostrum illo repellendus cum eius neque, aperiam dolores quaerat quis dolore magnam doloremque minus sint nemo qui necessitatibus at. Perspiciatis, corrupti cum labore quos odio porro!'
    },
    {
      'id': 2,
      'question': 'Can I access my eBook on mobile?',
      'answer': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At accusamus nobis tempore perferendis qui, quam, atque reprehenderit vero quaerat, assumenda pariatur eveniet. Maxime eaque, neque corrupti ad minus repudiandae consectetur!'
    },
    {
      'id': 3,
      'question': 'Do you offer refunds?',
      'answer': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi.'
    },
    {
      'id': 4,
      'question': 'Do you support Internation payments?',
      'answer': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse iste dolor deserunt expedita quam fugit et inventore amet pariatur. Animi.'
    }
  ];

  return (
    <section className='my-10 p-7 border rounded dark:border-slate-700 shadow-sm'>
      <h1 className='mb-5 text-2xl text-center underline font-semibold underline-offset-8 dark:text-slate-100'>Question in mind?</h1>
      <div id="accordion-flush" data-accordion="collapse" data-active-classnamees="bg-neutral-primary text-heading" data-inactive-classnamees="text-body">
        {faq.map(item => (
          <Accordion key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
