'use client'

/* Importações Gerais */
import { Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

/* Importação de componentes */
import TextReader from './TextReader'

export default function ModalLogin() {

  /* Fica definido o modal como verdadeiro e vai abrir até que o usuário cliente em Login. Nosso objetivo é fazer com que 
  ele faça Login para ter uma melhor experiência e podermos coletar dados. */
  
  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

  /* Enviar os dados do modal para o LocalStorage e mostrar uma única vez na sessão */

  useEffect(() => {
    const modalShown = localStorage.getItem('modalShown');
  
    // Exibe o modal se modalShown não for 'true'
    if (modalShown === 'true') {
      setOpen(false);
    }
  }, []);
  
  const handleLogin = () => {

    // Define 'modalShown' como 'false' para que o modal não seja exibido novamente
    localStorage.setItem('modalShown', 'true');
    setOpen(true);
  }


  const handleCancel = () => {
    localStorage.setItem('modalShown', 'false');
    setOpen(false);
  };


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white dark:text-gray-700 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white dark:text-gray-700 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      
                    <TextReader text="Melhore sua experiência com apenas dois cliques">

                        <Dialog.Title as="h3" className="font-manrope leading-6 text-gray-900 text-lg mb-5">
                      Melhore sua experiência com apenas dois cliques
                        </Dialog.Title>

                    </TextReader>

                      <div className="mt-2 font-manrope text-lg">
                            
                        
                        <TextReader text="Para ter acesso a todos os conteúdos e novidades, faça o login usando uma das nossas plataformas parceiras com apenas dois clientes e veja a diferença na sua navegação.">
                            <p className="text-sm text-gray-500 font-manrope">
                        Para ter acesso a todos os conteúdos e novidades, faça o login usando uma das nossas plataformas parceiras com apenas dois cliques e veja a diferença na sua navegação.
                        </p>
                        </TextReader>

                        <TextReader text="Não precisa ter conta com a SalesForce">
                          <p className="text-md text-gray-500 font-manrope mt-5">Não precisa ter conta com a SalesForce</p>
                        </TextReader>
                        
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-segunda px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primeira sm:ml-3 sm:w-auto"
                    
                    onClick={handleLogin}
                  >
                
                    <TextReader text="Login">
                        <Link href="/LoginSimple" className='font-sen text-xl'>Login</Link>
                    </TextReader>

                  </button>


                <TextReader text="Home">
                    <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 font-sen text-xl text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-auto hover:bg-red-500 hover:text-white"
                        
                        onClick={handleCancel}

                        ref={cancelButtonRef}

                    >
                        Home
                    </button>
                </TextReader>

                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}