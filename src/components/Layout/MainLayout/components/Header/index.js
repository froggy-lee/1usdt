/* eslint-disable no-unused-vars */
import React, { useCallback, useState, useEffect } from 'react'
import * as S from './styles'
import Image from 'next/image'
import Link from 'next/link'
import { Arrow, Caret, Logout } from '/public/svgs'
import { useDispatch } from 'react-redux'
import { showHowtoBuyModal } from '/src/store/slice/modal'
import { BASE_INFURA_KEY } from '/src/constants'
import { providers } from 'web3modal'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import WalletConnectProvider from '@walletconnect/web3-provider'

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: BASE_INFURA_KEY,
      rpc: {
        56: 'https://bsc-dataseed.binance.org/',
        97: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
      },
      network: 'binance'
    }
  }
  // binancechainwallet: {
  //   package: true,
  //   connector: async () => {
  //     let provider = null
  //     if (typeof window.BinanceChain !== 'undefined') {
  //       provider = window.BinanceChain
  //       try {
  //         await provider.request({ method: 'eth_requestAccounts' })
  //       } catch (error) {
  //         throw new Error('User Rejected')
  //       }
  //     } else {
  //       throw new Error('No Binance Chain Wallet found')
  //     }
  //     return provider
  //   }
  // }
}

const userInfo = {
  name: 'Nhung Popcorn',
  avatar: '/images/fake-avatar.png'
}

const Header = ({ openWinning, statusOpenWinning }) => {
  const dispatch = useDispatch()
  // fake login success
  const user = false

  const [active, setActive] = useState(false)

  const handleSetActive = () => {
    setActive(!active)
  }

  // const handleOpenLoginModal = useCallback(() => {
  //   dispatch(showLoginModalAction(true))
  // }, [dispatch])

  const handleShowHowToBuyModal = useCallback(() => {
    dispatch(showHowtoBuyModal(true))
  }, [dispatch])

  const [toggleWinning, setToggleWinning] = useState()
  const handleToggle = () => {
    setToggleWinning(!toggleWinning)
    // serArrow(!arrow)
  }

  let web3Modal
  const [provider, setProvider] = useState()
  const [library, setLibrary] = useState()
  const [account, setAccount] = useState()
  const [chainId, setChainId] = useState()

  const changeNetwork = useCallback(async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${Number(56).toString(16)}` }]
      })
    } catch (e) {
      if (e.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: `0x${Number(56).toString(16)}`,
                chainName: 'Binance Smart Chain Mainnet',
                nativeCurrency: {
                  name: 'BNB',
                  symbol: 'BNB',
                  decimals: 18
                },
                blockExplorerUrls: ['https://bscscan.com'],
                rpcUrls: ['https://bsc-dataseed.binance.org/']
              }
            ]
          })
        } catch (addError) {
          // eslint-disable-next-line no-console
          console.error(addError)
        }
      }
    }
  }, [])

  useEffect(() => {
    if (!window.ethereum) {
      providerOptions['custom-metamask'] = {
        display: {
          logo: providers.METAMASK.logo,
          name: 'Install MetaMask',
          description: 'Connect using browser wallet'
        },
        package: {},
        connector: async () => {
          window.open('https://metamask.io')
          throw new Error('MetaMask not installed')
        }
      }
    } else {
      changeNetwork()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    web3Modal = new Web3Modal({
      network: 'mainnet',
      theme: {
        background: '#fff',
        border: '#000'
      },
      cacheProvider: true,
      providerOptions
    })
  }, [])

  const connectWallet = useCallback(async () => {
    try {
      const provider = await web3Modal.connect()
      const library = new ethers.providers.Web3Provider(provider)
      const accounts = await library.listAccounts()
      const network = await library.getNetwork()
      setProvider(provider)
      setLibrary(library)
      if (accounts) setAccount(accounts[0])
      setChainId(network.chainId)
    } catch (error) {
      if (error.code === 4001) {
        // eslint-disable-next-line no-console
        console.log('Please connect to MetaMask.')
      }
    }
  }, [web3Modal])

  const refreshState = useCallback(() => {
    setAccount()
    setChainId()
  }, [])

  const disconnect = useCallback(async () => {
    await web3Modal.clearCachedProvider()
    refreshState()
  }, [refreshState, web3Modal])

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectWallet])

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = accounts => {
        if (accounts) setAccount(accounts[0])
      }
      const handleChainChanged = _hexChainId => {
        setChainId(_hexChainId)
      }
      const handleDisconnect = () => {
        disconnect()
      }
      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('chainChanged', handleChainChanged)
      provider.on('disconnect', handleDisconnect)
      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('chainChanged', handleChainChanged)
          provider.removeListener('disconnect', handleDisconnect)
        }
      }
    }
  }, [disconnect, provider])

  return (
    <S.Header>
      <S.HambugerButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleSetActive}
      >
        <Image
          src="/images/icons/hambuger-icon.png"
          width={32}
          height={21}
          alt=""
        />
      </S.HambugerButton>

      <S.Menu active={active}>
        <div className="backdrop" onClick={handleSetActive}></div>
        <Link href="/" passHref>
          <S.Logo>
            <Image src="/images/logo.png" width={130} height={65} alt="logo" />
          </S.Logo>
        </Link>

        <S.Nav>
          <S.NavWrapper>
            {user && (
              <>
                <S.Line></S.Line>

                <S.AuthMobile>
                  <S.Avatar>
                    <Image
                      src={userInfo.avatar}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </S.Avatar>
                  <S.UserInfo>
                    <S.UserName>{userInfo.name}</S.UserName>
                    <S.UserDepositWrapper>
                      <S.UsdtButton>
                        <div className="icon">
                          <Image
                            src="/images/icons/usdt-icon.png"
                            layout="fill"
                            alt="icon"
                          />
                        </div>
                        {'10.00'} USDT
                      </S.UsdtButton>
                      <S.DepositMobileButton>
                        <div className="icon">
                          <Image
                            src="/images/icons/deposit-icon.png"
                            layout="fill"
                            alt="icon"
                          />
                        </div>
                        Deposit
                      </S.DepositMobileButton>
                    </S.UserDepositWrapper>
                  </S.UserInfo>
                </S.AuthMobile>
              </>
            )}

            <S.Line></S.Line>

            <S.NavItem>
              <S.WinningNumbersLink
                onClick={handleToggle}
                // className={arrow ? 'arrow' : ''}
              >
                Winning numbers <Arrow />
                {toggleWinning && (
                  <>
                    <S.WinningNumbers>
                      <S.WinningItem>
                        <Link href="/winning-numbers" passHref>
                          <S.WinningLink>Winning history</S.WinningLink>
                        </Link>
                      </S.WinningItem>
                      <S.WinningItem>
                        <Link href="/profile/ticket-history" passHref>
                          <S.WinningLink>Ticket History</S.WinningLink>
                        </Link>
                      </S.WinningItem>
                    </S.WinningNumbers>

                    <S.WinningNumberMobile>
                      <div className="border-left"></div>
                      <div className="border-winning">
                        <div className="border-top"></div>
                        <Link href="/winning-numbers" passHref>
                          <S.WinningItemMobile>
                            Winning history
                          </S.WinningItemMobile>
                        </Link>
                      </div>
                      <div className="border-winning">
                        <div className="border-top"></div>
                        <Link href="/profile/ticket-history" passHref>
                          <S.WinningItemMobile>
                            Ticket History
                          </S.WinningItemMobile>
                        </Link>
                      </div>
                    </S.WinningNumberMobile>
                  </>
                )}
              </S.WinningNumbersLink>
            </S.NavItem>

            <S.Line></S.Line>

            <S.NavItem>
              <S.NavLink>
                <Link href="/prize-structure">Prize structures</Link>
              </S.NavLink>
            </S.NavItem>

            <S.Line></S.Line>

            <S.NavItem>
              <S.NavLink onClick={handleShowHowToBuyModal}>
                How to buy
              </S.NavLink>
            </S.NavItem>

            <S.Line></S.Line>

            <S.NavItem>
              <S.NavLink>
                <Link href="/faqs">FAQs</Link>
              </S.NavLink>
            </S.NavItem>
            {/* {user ? (
              <>
                <S.Auth>
                  <S.DepositButton>
                    <div className="icon">
                      <Image
                        src="/images/icons/deposit-icon.png"
                        width={15}
                        height={15}
                        alt="icon"
                      />
                    </div>
                    Deposit
                  </S.DepositButton>
                  <S.Avatar>
                    <Image
                      src={userInfo.avatar}
                      layout="fill"
                      object="cover"
                      alt=""
                    />
                  </S.Avatar>
                </S.Auth>
              </>
            ) : (
              <S.SignButton onClick={() => connectWallet()}>
                Connect Wallet
              </S.SignButton>
            )} */}
            {!account ? (
              <S.SignButton
                onClick={() => {
                  connectWallet()
                  handleSetActive()
                }}
              >
                Connect Wallet
              </S.SignButton>
            ) : (
              <S.SignButton>Logout</S.SignButton>
            )}
          </S.NavWrapper>
        </S.Nav>

        {user && (
          <S.LogoutButton>
            <Logout />
            Logout
          </S.LogoutButton>
        )}
      </S.Menu>

      <S.MobileWinningNumbers onClick={openWinning} active={statusOpenWinning}>
        Winning Numbers <Caret />
      </S.MobileWinningNumbers>
    </S.Header>
  )
}

export default Header
