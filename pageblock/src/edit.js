import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { RichText, InspectorControls, MediaUpload, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { Panel, PanelBody, Button, ToggleControl, ColorPalette } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
	const {
		header_title, header_subtitle, image,
		showHeader, showTitle, showSubtitle, showImage, showRow,
		row_one, showRowOne, showRowOneImage, showRowOneText,
		row_two, showRowTwo, showRowTwoImage, showRowTwoText,
	} = attributes; 	
	return (
		<div { ...useBlockProps() }>
			{ showHeader && 
				<div className="wp-block-themeisle-blocks-header" 
					style={{
						backgroundImage: showImage ? `url(${ image.url })` : 'none',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundAttachment: 'fixed',
					}}>
					<div style={{
						padding: '120px 60px 120px 60px'
					}}>
						<div className="wp-block-themeisle-blocks-header__title" 
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
										placeholder = { __( 'Align title' ) }
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
										verticalAlign: 'middle',
										color: header_title.color,
									}}
									placeholder={ __( 'Top title', 'themeisle-companion' ) }
								/>
							}
						</div>
						<div className="wp-block-themeisle-blocks-header__subtitle" style= {{ textAlign: header_title.align }} >
							{ showSubtitle &&
								<RichText
									tagName="small"
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
									}}
									placeholder={ __( 'Top subtitle', 'themeisle-companion' ) }
								/>
							}
						</div>
					</div>
				</div> 
			}
			{ showRow &&
				<div className="wp-block-themeisle-blocks-body">
					{ showRowOne &&
						<div className="wp-block-themeisle-blocks-body__row-one" style={{ backgroundColor: row_one.back, display: 'grid', gridTemplateColumns: '60% auto', columnGap: '20px'}}>
							{ showRowOneImage &&
								(row_one.url != 0) ? (
									<div>
										<img src={ row_one.url } alt={ row_one.alt } style={{ width: '100%'}} />
										<Button onClick={ () => {
											setAttributes( {
												row_one: {
													...row_one,
													id: 0,
													url: '',
													alt: '',
												}
											} );
										}
										} className="button button-primary" style={{ marginLeft: '5vh', marginTop: '1vh', marginBottom: '1vh' }} >
											{ __( 'Remove Image' ) }
										</Button>
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
												<Button onClick={ open } className="button" style={{ marginLeft: '5vh', marginTop: '1vh', marginBottom: '1vh' }}>
													{ __( 'Change Image' ) }
												</Button>
											) }
										/>
									</div>
								) : (
									<div>
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
									</div>
								)
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
										margin: '30% 15% 0% 15%',
									}}
								/>
							}
						</div>
					}
					{ showRowTwo &&
						<div className="wp-block-themeisle-blocks-body__row-two" style={{ backgroundColor: row_two.back, display: 'grid', gridTemplateColumns: 'auto 60%', columnGap: '20px' }}>
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
										padding: '30% 15% 0% 15%',
									}}
								/>
							}
							{ showRowTwoImage &&
								(row_two.url != 0) ? (
									<div>
										<img src={ row_two.url } alt={ row_two.alt } style={{ width: '100%'}} />
										<Button onClick={ () => {
											setAttributes( {
												row_two: {
													...row_two,
													id: 0,
													url: '',
													alt: '',
												}
											} );
										}
										} className="button button-primary" style={{ marginLeft: '5vh', marginTop: '1vh', marginBottom: '1vh' }} >
											{ __( 'Remove Image' ) }
										</Button>
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
												<Button onClick={ open } className="button" style={{ marginLeft: '5vh', marginTop: '1vh', marginBottom: '1vh' }}>
													{ __( 'Change Image' ) }
												</Button>
											) }
										/>
									</div>
								) : (
									<div>
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
												<Button onClick={ open } className="button" style={{ marginLeft: '5vh', marginTop: '5vh' }}>
													{ __( 'Select Image' ) }
												</Button>
											) }
										/>
									</div>
								)
							}
						</div>
					}
				</div>
			}
			<InspectorControls>
				<Panel>
					<PanelBody title={ __( 'Header Settings', 'themeisle-companion' ) } initialOpen={ false }>
						<PanelBody title='Header Visibility Settings' initialOpen={ false }>
							<ToggleControl
								label={ __( 'Show Header', 'themeisle-companion' ) }
								checked={ showHeader }
								onChange={ ( value ) => {
									setAttributes( {
										showHeader: value,
									} );
								} }
							/>
							<ToggleControl
								label={ __( 'Show Title', 'themeisle-companion' ) }
								checked={ showTitle }
								onChange={ ( value ) => {
									setAttributes( {
										showTitle: value
									} );
								} }
							/>
							<ToggleControl
								label={ __( 'Show Subtitle', 'themeisle-companion' ) }
								checked={ showSubtitle }
								onChange={ ( value ) => {
									setAttributes( {
										showSubtitle: value
									} );
								} }
							/>
							<ToggleControl
								label={ __( 'Show Background Image', 'themeisle-companion' ) }
								checked={ showImage }
								onChange={ ( value ) => {
									setAttributes( {
										showImage: value
									} );
								} }
							/>
						</PanelBody>
						<PanelBody title='Header Background' initialOpen={false}>
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
						<PanelBody title='Header Title' initialOpen={ false }>
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
						<PanelBody title='Header Subtitle' initialOpen={ false }>
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
					<PanelBody title='Body Settings' initialOpen={ false }>
						<PanelBody title='Row Visibility Settings' initialOpen={ false }>
							<ToggleControl
								label={ __( 'Show Body', 'themeisle-companion' ) }
								checked={ showRow }
								onChange={ ( value ) => {
									setAttributes( {
										showRow: value
									} );
								} }
							/>
							<ToggleControl
								label={ __( 'Show Row One', 'themeisle-companion' ) }
								checked={ showRowOne }
								onChange={ ( value ) => {
									setAttributes( {
										showRowOne: value
									} );
								} }
							/>
							<ToggleControl
								label={ __( 'Show Row Two', 'themeisle-companion' ) }
								checked={ showRowTwo }
								onChange={ ( value ) => {
									setAttributes( {
										showRowTwo: value
									} );
								} }
							/>
						</PanelBody>
						<PanelBody title='Row One Settings' initialOpen={false}>
							<PanelBody title='Image Settings' initialOpen={false}>
								<ToggleControl
									label={ __( 'Show Image', 'themeisle-companion' ) }
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
										<img src={ row_one.url } alt={ row_one.alt } />
									</div>
								}
							</PanelBody>
							<PanelBody title='Text Settings' initialOpen={false}>
								<ToggleControl
									label={ __( 'Show Text', 'themeisle-companion' ) }
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
									label={ __( 'Show Image', 'themeisle-companion' ) }
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
									</div>
								}
							</PanelBody>
							<PanelBody title='Text Settings' initialOpen={false}>
								<ToggleControl
									label={ __( 'Show Text', 'themeisle-companion' ) }
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
					</PanelBody>
				</Panel>
			</InspectorControls>
		</div>
	);
}
