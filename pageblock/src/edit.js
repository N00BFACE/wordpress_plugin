import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { RichText, InspectorControls, MediaUpload, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { Panel, PanelBody, Button, ToggleControl, ColorPalette, Card, CardHeader, CardBody, CardFooter, RangeControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { useSelect } from '@wordpress/data';

export default function Edit( { attributes, setAttributes } ) {
	const {
		header_title, header_subtitle, image,
		showHeader, showTitle, showSubtitle, showImage,
		row_one, showRowOne, showRowOneImage, showRowOneSubtitle, showRowOneTitle, showRowOneText,
		row_two, showRowTwo, showRowTwoImage, showRowTwoText,
		showAboutUs, showStaff, staff, staffNumber,
		showContactUs, contact_form, showContactForm, showContactFormTitle, showName
	} = attributes;

	apiFetch( { path: '/pageblock/v1/staff_table' } ).then( ( data ) => {
		setAttributes( { staff: data} )
	} );
	
	const staffNum = staffNumber;

	return (
		<div { ...useBlockProps() }>
			{ showHeader && 
				<div className="pageblock-home" 
				style={{
					backgroundImage: showImage ? `url(${ image.url })` : 'none',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundAttachment: 'fixed',
					backgroundColor: image.color,
					padding: '120px 60px 120px 60px'
				}}>
					<div className="pageblock-home-title" 
						style={{
							textAlign: header_title.align
						}}>
						{
							<BlockControls>
								<AlignmentToolbar
									value = { header_title.align }
									onChange = { ( align ) => {
										setAttributes( {
											header_title: {
												...header_title,
												align: align === undefined ? 'none' : align,
											}
										} );
									} }
								/>
							</BlockControls>
						}
						{ showTitle && 
							<RichText
								tagName="h2"
								value={ header_title.text }
								onChange={ ( value ) => {
									setAttributes( {
										header_title: {
											...header_title,
											text: value,
										}
									} );
								} }
								style={{
									color: header_title.color,
								}}
								placeholder= 'Home Title'
							/>
						}
					</div>
					<div className="pageblock-home-subtitle" style= {{ textAlign: header_title.align,}} >
						{ showSubtitle &&
							<RichText
								tagName="p"
								value={ header_subtitle.text }
								onChange={ ( value ) => {
									setAttributes( {
										header_subtitle: {
											...header_subtitle,
											text: value
										}
									} );
								} }
								style={{
									color: header_subtitle.color,
									padding: '0 70px 0 70px'
								}}
								placeholder= 'Home Subtitle'
							/>
						}
					</div>
				</div> 
			}
			{ showAboutUs && 
				<div className="pageblock-about-us">
					{ showRowOne &&
						<div className="pageblock-about-us-row-one" style={{ backgroundColor: row_one.back, display: 'grid', gridTemplateColumns: '50% auto', columnGap: '20px', padding: '25px'}}>
							{ showRowOneImage &&
								(row_one.url != 0) ? (
									<div style={{ display: 'flex' }}>
										<img src={ row_one.url } alt={ row_one.alt } style={{ width: '100%'}} />
									</div>
								) : (
									<div>
										<Card>
											<CardHeader>
												Choose Your Media
											</CardHeader>
											<CardBody>
												<MediaUpload
													onSelect={ ( media ) => {
														setAttributes( {
															row_one: {
																...row_one,
																id: media.id,
																url: media.url,
																alt: media.alt,
															}
														} );
													}}
													value={ row_one.id }
													render={ ( { open } ) => (
														<Button onClick={ open } className="button">
															{ __( 'Select Image' ) }
														</Button>
													) }
												/>
											</CardBody>
											<CardFooter>
												<small>
													Please choose your pictures from media library or upload new one.
												</small>
											</CardFooter>
										</Card>
									</div>
								)
							}
							<div className="pageblock-about-us-content-one">	
								{ showRowOneSubtitle &&
									<RichText
										placeholder='...Write Subtitle'
										tagName="small"
										value={ row_one.subtitle }
										onChange={ ( value ) => {
											setAttributes( {
												row_one: {
													...row_one,
													subtitle: value,
												}
											} );
										} }
										style={{
											color: row_one.color,
										}}
									/>
								}
								{ showRowOneTitle &&
									<RichText
										placeholder='...Write Title'
										tagName="h2"
										value={ row_one.title }
										onChange={ ( value ) => {
											setAttributes( {
												row_one: {
													...row_one,
													title: value,
												}
											} );
										} }
										style={{
											color: row_one.color,
										}}
									/>
								}
								{ showRowOneText &&
									<RichText
										placeholder='...Write Content'
										tagName="p"
										value={ row_one.text }
										onChange={ ( value ) => {
											setAttributes( {
												row_one: {
													...row_one,
													text: value,
												}
											} );
										} }
										style={{
											color: row_one.color,
										}}
									/>
								}
							</div>
						</div>
					}
					{ showRowTwo &&
						<div className="pageblock-about-us-row-two" style={{ backgroundColor: row_two.back, display: 'grid', gridTemplateColumns: 'auto 50%', columnGap: '20px', padding: '25px' }}>
							<div className="pageblock-about-us-content-two">	
								{ showRowTwoText &&
									<RichText
										placeholder='...Write Subtitle'
										tagName="small"
										value={ row_two.subtitle }
										onChange={ ( value ) => {
											setAttributes( {
												row_two: {
													...row_two,
													subtitle: value,
												}
											} );
										} }
										style={{
											color: row_two.color,
										}}
									/>
								}
								{ showRowTwoText &&
									<RichText
										placeholder='...Write Title'
										tagName="h2"
										value={ row_two.title }
										onChange={ ( value ) => {
											setAttributes( {
												row_two: {
													...row_two,
													title: value,
												}
											} );
										} }
										style={{
											color: row_two.color,
										}}
									/>
								}
								{ showRowTwoText &&
									<RichText
										placeholder='...Write Content'
										tagName="p"
										value={ row_two.text }
										onChange={ ( value ) => {
											setAttributes( {
												row_two: {
													...row_two,
													text: value,
												}
											} );
										} }
										style={{
											color: row_two.color,
										}}
									/>
								}
							</div>
							{ showRowTwoImage &&
								(row_two.url != 0) ? (
									<div style={{ display: 'flex' }}>
										<img src={ row_two.url } alt={ row_two.alt } style={{ width: '100%'}} />
									</div>
								) : (
									<div>
										<Card>
											<CardHeader>
												Choose Your Media
											</CardHeader>
											<CardBody>
												<MediaUpload
													onSelect={ ( media ) => {
														setAttributes( {
															row_two: {
																...row_two,
																id: media.id,
																url: media.url,
																alt: media.alt,
															}
														} );
													}}
													value={ row_two.id }
													render={ ( { open } ) => (
														<Button onClick={ open } className="button">
															{ __( 'Select Image' ) }
														</Button>
													) }
												/>
											</CardBody>
											<CardFooter>
												<small>
													Please choose your pictures from media library or upload new one.
												</small>
											</CardFooter>
										</Card>
									</div>
								)
							}
						</div>
					}
					{ showStaff &&
						<div className="pageblock-about-us-staff staff" style={{ display: 'grid', gridTemplateColumns: '33% 33% 33%', columnGap: '5px'}}>
							{ staff?.map( ( staffMember, index ) => {
								if ( index < staffNum && staff.length != 0 ) {
									if( staffNum < 4 ) {
										return (
											<div className="staff-member">
												<div style={{ backgroundColor: 'whitesmoke', textAlign: 'center', }}>
													<h5>{ staffMember.name }</h5>
													<p> { staffMember.image } </p>
													<p>{ staffMember.position }</p>
												</div>
											</div>
										);
									}
									if ( staffNum > 3 && staffNum < 7 ) {
										return (
											<div className="staff-member">
												<div style={{ backgroundColor: 'whitesmoke', textAlign: 'center', }}>
													<h5>{ staffMember.name }</h5>
													<p>{ staffMember.position }</p>
												</div>
											</div>
										);
									}
									if ( staffNum > 6 && staffNum < 10 ) {
										return (
											<div className="staff-member">
												<div style={{ backgroundColor: 'whitesmoke', textAlign: 'center', }}>
													<h5>{ staffMember.name }</h5>
													<p>{ staffMember.position }</p>
												</div>
											</div>
										);
									}
								}
							} ) }
						</div>
					}
				</div>
			}
			{ showContactUs &&
				<div className="pageblock-about-us-contact-us contact-us">
					{ showContactForm &&
						<div className="contact-us-contact-form contact-form">
							{ showContactFormTitle &&
								<div className="contact-us-contact-form-title">
									<RichText
										tagName="h4"
										placeholder='...Write Contact Form Title'
										value={ contact_form.title }
										onChange={ ( value ) => {
											setAttributes( { 
												contact_form: {
													...contact_form, 
													title: value 
												}
											} ); 
										} }
									/>
								</div>
							}
							{ showName &&
								<div className="contact-us-contact-form-name">
									<label htmlFor="name" style={{ display: 'block', margin: '10px', fontSize: '1.2rem', textTransform: 'uppercase', textAlign: 'left' }}>Name</label>
									<input required type="text" className="form-control" id="name" placeholder="Enter name" style={{ width: '50%', borderRadius: '25px', border: '1px solid #ccc', padding: '10px', fontSize: '1rem', textAlign: 'left' }}/>
								</div>
							}
							<div className="contact-us-contact-form-email">
								<label htmlFor="email" style={{ display: 'block', margin: '10px', fontSize: '1.2rem', textTransform: 'uppercase', textAlign: 'left' }}>Email</label>
								<input required type="email" className="form-control" id="email" placeholder="Enter email" style={{ width: '50%', borderRadius: '25px', border: '1px solid #ccc', padding: '10px', fontSize: '1rem', textAlign: 'left' }}/>
							</div>
							<div className="contact-us-contact-form-message">
								<label htmlFor="message" style={{ display: 'block', margin: '10px', fontSize: '1.2rem', textTransform: 'uppercase', textAlign: 'left' }}>Message</label>
								<textarea required className="form-control" id="message" rows="3" placeholder="Enter message" style={{ width: '70%', borderRadius: '15px', border: '1px solid #ccc', padding: '10px', fontSize: '1rem', textAlign: 'left' }}></textarea>
							</div>
							<div className="contact-us-contact-form-button">
								<Button variant='primary' isDefault style={{ borderRadius: '15px', border: '1px solid #ccc', fontSize: '1.05rem', textTransform: 'uppercase', textAlign: 'center', marginRight: '5px' }} >
									<RichText
										tagName='p'
										placeholder='..Button Text'
										value={ contact_form.submit }
										onChange={ ( value ) => {
											setAttributes( {
												contact_form: {
													...contact_form,
													submit: value
												}
											} );
										} }
									/>
								</Button>
								<Button isDefault onClick={ () => { setAttributes( { showContactForm: false } ); } } style={{ borderRadius: '15px', border: '1px solid #ccc', fontSize: '1rem', textTransform: 'uppercase', textAlign: 'center' }} >
									<RichText value={ 'Cancel' } tagName='p' />
								</Button>
							</div>
						</div>
					}
				</div>
			}
			<InspectorControls>
				<Panel>
					<PanelBody title='Home Settings' initialOpen={ false }>
						<PanelBody title='Visibility Settings' initialOpen={ false }>
							<ToggleControl
								label={ __( 'Show Home' ) }
								checked={ showHeader }
								onChange={ ( value ) => {
									setAttributes( {
										showHeader: value,
									} );
								} }
							/>
							<ToggleControl
								label={ __( 'Show Title' ) }
								checked={ showTitle }
								onChange={ ( value ) => {
									setAttributes( {
										showTitle: value
									} );
								} }
							/>
							<ToggleControl
								label={ __( 'Show Subtitle' ) }
								checked={ showSubtitle }
								onChange={ ( value ) => {
									setAttributes( {
										showSubtitle: value
									} );
								} }
							/>
							<ToggleControl
								label={ __( 'Show Background Image' ) }
								checked={ showImage }
								onChange={ ( value ) => {
									setAttributes( {
										showImage: value
									} );
								} }
							/>
						</PanelBody>
						<PanelBody title='Home Background' initialOpen={false}>
							<PanelBody title='Background Image' initialOpen={false}>
								<MediaUpload
									onSelect={ ( media ) => {
										setAttributes( {
											image: {
												id: media.id,
												url: media.url,
												alt: media.alt,
											}
										} );
									}}
									value={ image.id }
									render={ ( { open } ) => (
										<Button onClick={ open } className="button">
											{ __( 'Select Image' ) }
										</Button>
									) }
								/><hr></hr>
								{ image.id !=0 && 
									<Button onClick={ () => {
										setAttributes( {
											image: {
												id: 0,
												url: '',
												alt: '',
											}
										} );
									}
									} className="button button-primary">
										{ __( 'Remove Image' ) }
									</Button>
								}<hr></hr>
								{ image.url != '' &&
									<div className="wp-block-themeisle-blocks-header__image">
										<img src={ image.url } alt={ image.alt } />
									</div>
								}
							</PanelBody>
							<PanelBody title='Background Color' initialOpen={false}>
								<ColorPalette
									label={ __( 'Background Color' ) }
									value={ image.color }
									onChange={ ( value ) => {
										setAttributes( {
											image: {
												color: value
											}
										} );
									} }
								/>
							</PanelBody>
						</PanelBody>
						<PanelBody title='Home Title' initialOpen={ false }>
							<ColorPalette
								colors={[
									{ name: 'Black', color: '#000' },
									{ name: 'White', color: '#fff' },
									{ name: 'Red', color: '#ff0000' },
									{ name: 'Green', color: '#00ff00' },
									{ name: 'Blue', color: '#0000ff' },
								]}
								value={ header_title.color }
								onChange={ ( value ) => {
									setAttributes( {
										header_title: {
											...header_title,
											color: value 
										} } 
									);
								} }
							/>
						</PanelBody>
						<PanelBody title='Home Subtitle' initialOpen={ false }>
							<ColorPalette
								colors={[
									{ name: 'Black', color: '#000' },
									{ name: 'White', color: '#fff' },
									{ name: 'Red', color: '#ff0000' },
									{ name: 'Green', color: '#00ff00' },
									{ name: 'Blue', color: '#0000ff' },
								]}
								value={ header_subtitle.color }
								onChange={ ( value ) => {
									setAttributes( {
										header_subtitle: {
											...header_subtitle,
											color: value 
										} } 
									);
								} }
							/>
						</PanelBody>
					</PanelBody>
					<PanelBody title='About Us Settings' initialOpen={ false }>
						<PanelBody title='Visibility Settings' initialOpen={ false }>
							<ToggleControl
								label={ __( 'Show About Us' ) }
								checked={ showAboutUs }
								onChange={ ( value ) => {
									setAttributes( {
										showAboutUs: value
									} );
								} }
							/>
							<ToggleControl
								label={ __( 'Show Row One' ) }
								checked={ showRowOne }
								onChange={ ( value ) => {
									setAttributes( {
										showRowOne: value
									} );
								} }
							/>
							<ToggleControl
								label={ __( 'Show Row Two' ) }
								checked={ showRowTwo }
								onChange={ ( value ) => {
									setAttributes( {
										showRowTwo: value
									} );
								} }
							/>
							<ToggleControl
								label={ __( 'Show Staff' ) }
								checked={ showStaff }
								onChange={ ( value ) => {
									setAttributes( {
										showStaff: value
									} );
								} }
							/>
						</PanelBody>
						<PanelBody title='Row One Settings' initialOpen={false}>
							<PanelBody title='Image Settings' initialOpen={false}>
								<ToggleControl
									label={ __( 'Show Image' ) }
									checked={ showRowOneImage }
									onChange={ ( value ) => {
										setAttributes( {
											showRowOneImage: value
										} );
									} }
								/>

								<hr></hr>
								{ row_one.url != '' &&
									<div className="wp-block-themeisle-blocks-body__image">
										<img src={ row_one.url } alt={ row_one.alt } /><hr></hr>
										<Button onClick={ () => {
											setAttributes( {
												row_one: {
													...row_one,
													id: 0,
													url: '',
													alt: ''
												}
											} );
										}
										} className="button button-primary">
											{ __( 'Remove Image' ) }
										</Button><hr></hr>
										<MediaUpload
											onSelect={ ( media ) => {
												setAttributes( {
													row_one: {
														...row_one,
														id: media.id,
														url: media.url,
														alt: media.alt
													}
												} );
											} }
											value={ row_one.id }
											render={ ( { open } ) => (
												<Button onClick={ open } className="button">
													{ __( 'Change Image' ) }
												</Button>
											) }
										/>
									</div>
								}
							</PanelBody>
							<PanelBody title='Text Settings' initialOpen={false}>
								<ToggleControl
									label={ __( 'Show Text' ) }
									checked={ showRowOneText }
									onChange={ ( value ) => {
										setAttributes( {
											showRowOneText: value
										} );
									} }
								/>
								<ColorPalette
									value={ row_one.color }
									onChange={ ( value ) => {
										setAttributes( {
											row_one: {
												...row_one,
												color: value
											}
										} );
									} }
								/>
							</PanelBody>
							<PanelBody title='Background Settings' initialOpen={false}>
								<ColorPalette
									value={ row_one.back }
									onChange={ ( value ) => {
										setAttributes( {
											row_one: {
												...row_one,
												back: value
											}
										} );
									} }
								/>
							</PanelBody>
						</PanelBody>
						<PanelBody title='Row Two Settings' initialOpen={false}>
							<PanelBody title='Image Settings' initialOpen={false}>
								<ToggleControl
									label={ __( 'Show Image' ) }
									checked={ showRowTwoImage }
									onChange={ ( value ) => {
										setAttributes( {
											showRowTwoImage: value
										} );
									} }
								/>
								<hr></hr>
								{ row_two.url != '' &&
									<div className="wp-block-themeisle-blocks-body__image">
										<img src={ row_two.url } alt={ row_two.alt } />
										<hr></hr>
										<Button onClick={ () => {
											setAttributes( {
												row_two: {
													...row_two,
													id: 0,
													url: '',
													alt: ''
												}
											} );
										}
										} className="button button-primary">
											{ __( 'Remove Image' ) }
										</Button><hr></hr>
										<MediaUpload
											onSelect={ ( media ) => {
												setAttributes( {
													row_two: {
														...row_two,
														id: media.id,
														url: media.url,
														alt: media.alt
													}
												} );
											} }
											value={ row_two.id }
											render={ ( { open } ) => (
												<Button onClick={ open } className="button">
													{ __( 'Change Image' ) }
												</Button>
											) }
										/>
									</div>
								}
							</PanelBody>
							<PanelBody title='Text Settings' initialOpen={false}>
								<ToggleControl
									label={ __( 'Show Text' ) }
									checked={ showRowTwoText }
									onChange={ ( value ) => {
										setAttributes( {
											showRowTwoText: value
										} );
									} }
								/>
								<ColorPalette
									value={ row_two.color }
									onChange={ ( value ) => {
										setAttributes( {
											row_two: {
												...row_two,
												color: value
											}
										} );
									} }
								/>
							</PanelBody>
							<PanelBody title='Background Settings' initialOpen={false}>
								<ColorPalette
									value={ row_two.back }
									onChange={ ( value ) => {
										setAttributes( {
											row_two: {
												...row_two,
												back: value
											}
										} );
									} }
								/>
							</PanelBody>
						</PanelBody>
						<PanelBody title="Staff Settings" initialOpen={false}>
							<RangeControl
								label={ __( 'Number of Staff' ) }
								value={ staffNumber }
								onChange={ ( value ) => {
									setAttributes( {
										staffNumber: value
									} );
								} }
								min={ 1 }
								max={ 9 }
								step={ 1 }
							/>
						</PanelBody>
					</PanelBody>
					<PanelBody title='Contact Us Settings' initialOpen={false}>
						<PanelBody title='Visibility Settings' initialOpen={false}>
							<ToggleControl
								label={ __('Show Contact Us') }
								checked={showContactUs}
								onChange={ (value) => {
									setAttributes( {
										showContactUs: value,
									} );
								} }
							/>
							<ToggleControl
								label={ __('Show Contact Form') }
								checked={showContactForm}
								onChange={ (value) => {
									setAttributes( {
										showContactForm: value,
									} )
								} }
							/>
						</PanelBody>
						<PanelBody title='Contact Form Setting' initialOpen={false}>
							{/* <ToggleControl
								label={ __('Show Default Contact Form') }
								checked={showDefaultContactForm}
								onChange={ (value) => {
									setAttributes( {
										showDefaultContactForm: value,
									} );
								} }
							/>
							future update
							<SelectControl
								label={ __('Select Contact Form') }
								options={[
									{ label: 'Contact Form 1', value: 'contact_form_1' },
									{ label: 'Contact Form 2', value: 'contact_form_2' },
									{ label: 'Contact Form 3', value: 'contact_form_3' },
								]}
							/> */}
							<ToggleControl
								label={ __('Show Contact Form Title') }
								checked={showContactFormTitle}
								onChange={ (value) => {
									setAttributes( {
										showContactFormTitle: value,
									} );
								} }
							/>
							<ToggleControl
								label={ __('Show Name') }
								checked={showName}
								onChange={ (value) => {
									setAttributes( {
										showName: value,
									} );
								} }
							/>
						</PanelBody>
					</PanelBody>
				</Panel>
			</InspectorControls>
		</div>
	);
};