import React from 'react'
import * as yup from 'yup'
import { Form, Formik } from 'formik'
import FormikInput from './FormikInput'
import { useReadAllProductsQuery } from '../services/api/productService'
import { useDispatch } from 'react-redux'
import { updateFilteredData, updateSearchQuery } from '../features/searchSlice'


const FormikSearchBar = () => {
    const { data } = useReadAllProductsQuery()

    let dispatch = useDispatch()
    let product = data || []
    let initialValues = {
        searchTerm: ''
    }
    let validationSchema = yup.object({
        searchTerm: yup.string().required("Search field can't be empty")
    })
    let FormSubmit = async (value, { resetForm }) => {
        const searchResults = product.filter((p) =>
            p.title.toLowerCase().includes(value.searchTerm.toLowerCase())
        );
        dispatch(updateSearchQuery(value.searchTerm))
        dispatch(updateFilteredData(searchResults))
        resetForm()

    }

    return (
        <Formik
            initialValues={initialValues} onSubmit={FormSubmit} validationSchema={validationSchema}
            enableReinitialize={true}
        >
            {
                (formik) => {
                    return (
                        <Form>
                            <FormikInput className='search-bar' name="searchTerm" />
                        </Form>
                    )
                }
            }

        </Formik>

    )
}

export default FormikSearchBar