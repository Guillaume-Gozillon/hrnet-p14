import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { reset } from '../Redux/saveUserDataSlice'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const ModaleButton = ({ setState }) => {
  const dispatch = useDispatch()
  let [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setIsOpen(false)
    dispatch(reset())
  }

  const openModal = e => {
    e.preventDefault()
    setIsOpen(true)
    setState()
  }

  return (
    <>
      <div>
        <button
          type='button'
          onClick={openModal}
          className='text-lg w-full font-medium text-yellow-900 border-4 border-yellow-200 bg-yellow-100 mt-4 p-2 rounded-2xl hover:bg-yellow-300 hover:text-white focus:text-white focus:outline-none focus:font-bold focus:ring-2 focus:bg-yellow-300 focus:ring-opacity-50'
        >
          Sauvegarder
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-10 overflow-y-auto'
          onClose={closeModal}
        >
          <div className='min-h-screen px-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='inline-block w-full max-w-md py-8 px-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl border-4 border-yellow-300'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium leading-6 text-gray-900'
                >
                  Utilisateur sauvegard??
                </Dialog.Title>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    Votre nouvel utilisateur a ??t?? cr???? avec succ??s. Rendez vous
                    dans la partie "Employ??" pour voir la liste de tout vos
                    employ??s ainsi que le d??tail des informations.
                  </p>
                </div>

                <div className='mt-4'>
                  <button
                    type='button'
                    className='inline-flex justify-center px-4 py-2 text-sm font-medium text-yellow-900 bg-yellow-100 border border-transparent rounded-md hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-500'
                    onClick={closeModal}
                  >
                    Okay, merci !
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ModaleButton
