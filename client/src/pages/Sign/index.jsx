import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import InputGroup from '../../components/InputGroup';

const validationSchema = yup.object().shape({
	name: yup.string().required('Preencha seu nome'),
	username: yup.string().required('Preencha seu nome de usuário'),
	email: yup.string().email('Informe um e-mail válido').required('Informe seu e-mail'),
	password: yup.string().required('Digite uma senha'),
});

const Sign = ({ isSignUp }) => {
	const formik = useFormik({
		onSubmit: async (values) => {
			const res = await axios({
				method: 'post',
				baseURL: 'http://localhost:3000',
				url: '/users',
				data: values
			});
			console.log(res.data);
		},
		initialValues: {
			name: '',
			username: '',
			email: '',
			password: ''
		},
		validationSchema
	});
	return (
		<div>
			<header className='w-full flex flex-row justify-center border-b-2 py-6 border-solid border-red-300'>
				<img src='images/black-logo.svg' className='w-20 sm:w-36' />
			</header>
			<section className='px-6 py-8 sm:max-w-3xl sm:m-auto'>
				<div className='flex gap-6 mb-6'>
					<a className='flex items-center' href='/'>
						<img src='images/red-arrow-left.svg' />
					</a>
					<h1 className='text-xl font-bold'>{ isSignUp ? 'Crie sua conta' : 'Entre na sua conta' }</h1>
				</div>
				<form
					className='space-y-3'
					onSubmit={formik.handleSubmit}
				>
					<InputGroup
						name='name'
						label='Seu nome'
						placeholder='Digite seu nome'
						error={formik.touched.name && formik.errors.name}
						value={formik.values.name}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{ isSignUp && 
					<>
						<InputGroup
							name='username'
							label='Seu nome de usuário'
							placeholder='Digite seu nome de usuário'
							error={formik.touched.username && formik.errors.username}
							value={formik.values.username}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
						<InputGroup
							name='email'
							type='email'
							label='Seu email'
							placeholder='Digite seu email'
							error={formik.touched.email && formik.errors.email}
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						/>
					</> }
					<InputGroup
						name='password'
						type='password'
						label='Sua senha'
						placeholder='Digite sua senha'
						error={formik.touched.password && formik.errors.password}
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}

					/>
					<button
						type='submit'
						className='w-full bg-red-500 rounded-2xl text-white font-bold py-3 mt-8 disabled:opacity-50'
						disabled={!formik.isValid}
					>
						Criar
					</button>
				</form>
			</section>
		</div>
	);
};

Sign.propTypes = {
	isSignUp: PropTypes.bool
};

Sign.defaultProps = {
	isSignUp: false
};


export default Sign;