import { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Input from './components/Input'
import Button from './components/Button'
import Container from './components/Container'
import Section from './components/Section'

const compound = (deposit, contribution, years, rate) => {
  let total = deposit
  for (let i = 0; i < years; i++) {
    total = (total + contribution) * (rate + 1)
  }
  return Math.round(total)
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})
function App() {
  const [balance, setBalance] = useState('')
  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const result = compound(Number(deposit), Number(contribution), Number(years), Number(rate))
    setBalance(formatter.format(result))
  }

  return (
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit: '',
            contribution: '',
            years: '',
            rate: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            deposit: Yup.number().required('Required').typeError('Must be a number'),
            contribution: Yup.number().required('Required').typeError('Must be a number'),
            years: Yup.number().required('Required').typeError('Must be a number'),
            rate: Yup.number().required('Required').typeError('Must be a number'),
          })}
        >
          <Form>
            <Input name="deposit" label="Initial deposit" />
            <Input name="contribution" label="Contribution" />
            <Input name="years" label="years" />
            <Input name="rate" label="Rate" />
            <Button type="Submit">Calculate</Button>
          </Form>
        </Formik>
        {balance !== '' ? `Final Balance:${balance}` : null}
      </Section>

    </Container>
  );
}

export default App;
