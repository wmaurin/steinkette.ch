import { Form } from '../components';

const contactFields = [
  {
    name: 'name',
    label: 'Dein Name',
    type: 'text' as const,
    placeholder: 'Max Muster',
    required: true,
  },
  {
    name: 'email',
    label: 'Deine Mail Adresse',
    type: 'email' as const,
    placeholder: 'max@beispiel.ch',
    required: true,
  },
  {
    name: 'subject',
    label: 'Betreff',
    type: 'text' as const,
    placeholder: 'Anfrage zu einer Kette',
    required: true,
  },
  {
    name: 'message',
    label: 'Deine Nachricht',
    type: 'textarea' as const,
    placeholder: 'Schreibe hier deine Nachricht...',
    required: true,
  },
];

function Kontakt() {
  const handleSubmit = (data: FormData) => {
    const formData = {
      name: data.get('name'),
      email: data.get('email'),
      subject: data.get('subject'),
      message: data.get('message'),
    };
    console.log('Form submitted:', formData);
    // TODO: Send email or handle form submission
  };

  return (
    <Form
      header="Kontakt"
      fields={contactFields}
      submitLabel="Nachricht senden"
      onSubmit={handleSubmit}
      center
    />
  );
}

export default Kontakt;
