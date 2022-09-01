/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);







function Edit(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    header_title,
    header_subtitle,
    image,
    showHeader,
    showTitle,
    showSubtitle,
    showImage,
    row_one,
    showRowOne,
    showRowOneImage,
    showRowOneSubtitle,
    showRowOneTitle,
    showRowOneText,
    row_two,
    showRowTwo,
    showRowTwoImage,
    showRowTwoText,
    showAboutUs,
    showStaff,
    staff,
    staffNumber,
    showContactUs,
    contact_form,
    showContactForm,
    showContactFormTitle,
    showName
  } = attributes;
  _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
    path: '/pageblock/v1/staff_table'
  }).then(data => {
    setAttributes({
      staff: data
    });
  });
  const staffNum = staffNumber;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)(), showHeader && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pageblock-home",
    style: {
      backgroundImage: showImage ? `url(${image.url})` : 'none',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundColor: image.color,
      padding: '120px 60px 120px 60px'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pageblock-home-title",
    style: {
      textAlign: header_title.align
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.AlignmentToolbar, {
    value: header_title.align,
    onChange: align => {
      setAttributes({
        header_title: { ...header_title,
          align: align === undefined ? 'none' : align
        }
      });
    }
  })), showTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h2",
    value: header_title.text,
    onChange: value => {
      setAttributes({
        header_title: { ...header_title,
          text: value
        }
      });
    },
    style: {
      color: header_title.color
    },
    placeholder: "Home Title"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pageblock-home-subtitle",
    style: {
      textAlign: header_title.align
    }
  }, showSubtitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    value: header_subtitle.text,
    onChange: value => {
      setAttributes({
        header_subtitle: { ...header_subtitle,
          text: value
        }
      });
    },
    style: {
      color: header_subtitle.color,
      padding: '0 70px 0 70px'
    },
    placeholder: "Home Subtitle"
  }))), showAboutUs && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pageblock-about-us"
  }, showRowOne && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pageblock-about-us-row-one",
    style: {
      backgroundColor: row_one.back,
      display: 'grid',
      gridTemplateColumns: '50% auto',
      columnGap: '20px',
      padding: '25px'
    }
  }, showRowOneImage && row_one.url != 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: row_one.url,
    alt: row_one.alt,
    style: {
      width: '100%'
    }
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Card, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardHeader, null, "Choose Your Media"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => {
      setAttributes({
        row_one: { ...row_one,
          id: media.id,
          url: media.url,
          alt: media.alt
        }
      });
    },
    value: row_one.id,
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        className: "button"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Image'));
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardFooter, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, "Please choose your pictures from media library or upload new one.")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pageblock-about-us-content-one"
  }, showRowOneSubtitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    placeholder: "...Write Subtitle",
    tagName: "small",
    value: row_one.subtitle,
    onChange: value => {
      setAttributes({
        row_one: { ...row_one,
          subtitle: value
        }
      });
    },
    style: {
      color: row_one.color
    }
  }), showRowOneTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    placeholder: "...Write Title",
    tagName: "h2",
    value: row_one.title,
    onChange: value => {
      setAttributes({
        row_one: { ...row_one,
          title: value
        }
      });
    },
    style: {
      color: row_one.color
    }
  }), showRowOneText && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    placeholder: "...Write Content",
    tagName: "p",
    value: row_one.text,
    onChange: value => {
      setAttributes({
        row_one: { ...row_one,
          text: value
        }
      });
    },
    style: {
      color: row_one.color
    }
  }))), showRowTwo && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pageblock-about-us-row-two",
    style: {
      backgroundColor: row_two.back,
      display: 'grid',
      gridTemplateColumns: 'auto 50%',
      columnGap: '20px',
      padding: '25px'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pageblock-about-us-content-two"
  }, showRowTwoText && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    placeholder: "...Write Subtitle",
    tagName: "small",
    value: row_two.subtitle,
    onChange: value => {
      setAttributes({
        row_two: { ...row_two,
          subtitle: value
        }
      });
    },
    style: {
      color: row_two.color
    }
  }), showRowTwoText && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    placeholder: "...Write Title",
    tagName: "h2",
    value: row_two.title,
    onChange: value => {
      setAttributes({
        row_two: { ...row_two,
          title: value
        }
      });
    },
    style: {
      color: row_two.color
    }
  }), showRowTwoText && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    placeholder: "...Write Content",
    tagName: "p",
    value: row_two.text,
    onChange: value => {
      setAttributes({
        row_two: { ...row_two,
          text: value
        }
      });
    },
    style: {
      color: row_two.color
    }
  })), showRowTwoImage && row_two.url != 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: row_two.url,
    alt: row_two.alt,
    style: {
      width: '100%'
    }
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Card, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardHeader, null, "Choose Your Media"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => {
      setAttributes({
        row_two: { ...row_two,
          id: media.id,
          url: media.url,
          alt: media.alt
        }
      });
    },
    value: row_two.id,
    render: _ref3 => {
      let {
        open
      } = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        className: "button"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Image'));
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardFooter, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", null, "Please choose your pictures from media library or upload new one."))))), showStaff && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pageblock-about-us-staff staff",
    style: {
      display: 'grid',
      gridTemplateColumns: '33% 33% 33%',
      columnGap: '5px'
    }
  }, staff === null || staff === void 0 ? void 0 : staff.map((staffMember, index) => {
    if (index < staffNum && staff.length != 0) {
      if (staffNum < 4) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "staff-member"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          style: {
            backgroundColor: 'whitesmoke',
            textAlign: 'center'
          }
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, staffMember.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, " ", staffMember.image, " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, staffMember.position)));
      }

      if (staffNum > 3 && staffNum < 7) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "staff-member"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          style: {
            backgroundColor: 'whitesmoke',
            textAlign: 'center'
          }
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, staffMember.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, staffMember.position)));
      }

      if (staffNum > 6 && staffNum < 10) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "staff-member"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          style: {
            backgroundColor: 'whitesmoke',
            textAlign: 'center'
          }
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, staffMember.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, staffMember.position)));
      }
    }
  }))), showContactUs && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pageblock-about-us-contact-us contact-us"
  }, showContactForm && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "contact-us-contact-form contact-form"
  }, showContactFormTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "contact-us-contact-form-title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h4",
    placeholder: "...Write Contact Form Title",
    value: contact_form.title,
    onChange: value => {
      setAttributes({
        contact_form: { ...contact_form,
          title: value
        }
      });
    }
  })), showName && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "contact-us-contact-form-name"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "name",
    style: {
      display: 'block',
      margin: '10px',
      fontSize: '1.2rem',
      textTransform: 'uppercase',
      textAlign: 'left'
    }
  }, "Name"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    required: true,
    type: "text",
    className: "form-control",
    id: "name",
    placeholder: "Enter name",
    style: {
      width: '50%',
      borderRadius: '25px',
      border: '1px solid #ccc',
      padding: '10px',
      fontSize: '1rem',
      textAlign: 'left'
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "contact-us-contact-form-email"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "email",
    style: {
      display: 'block',
      margin: '10px',
      fontSize: '1.2rem',
      textTransform: 'uppercase',
      textAlign: 'left'
    }
  }, "Email"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    required: true,
    type: "email",
    className: "form-control",
    id: "email",
    placeholder: "Enter email",
    style: {
      width: '50%',
      borderRadius: '25px',
      border: '1px solid #ccc',
      padding: '10px',
      fontSize: '1rem',
      textAlign: 'left'
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "contact-us-contact-form-message"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "message",
    style: {
      display: 'block',
      margin: '10px',
      fontSize: '1.2rem',
      textTransform: 'uppercase',
      textAlign: 'left'
    }
  }, "Message"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    required: true,
    className: "form-control",
    id: "message",
    rows: "3",
    placeholder: "Enter message",
    style: {
      width: '70%',
      borderRadius: '15px',
      border: '1px solid #ccc',
      padding: '10px',
      fontSize: '1rem',
      textAlign: 'left'
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "contact-us-contact-form-button"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "primary",
    isDefault: true,
    style: {
      borderRadius: '15px',
      border: '1px solid #ccc',
      fontSize: '1.05rem',
      textTransform: 'uppercase',
      textAlign: 'center',
      marginRight: '5px'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    placeholder: "..Button Text",
    value: contact_form.submit,
    onChange: value => {
      setAttributes({
        contact_form: { ...contact_form,
          submit: value
        }
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isDefault: true,
    onClick: () => {
      setAttributes({
        showContactForm: false
      });
    },
    style: {
      borderRadius: '15px',
      border: '1px solid #ccc',
      fontSize: '1rem',
      textTransform: 'uppercase',
      textAlign: 'center'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    value: 'Cancel',
    tagName: "p"
  }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Panel, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Home Settings",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Visibility Settings",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Home'),
    checked: showHeader,
    onChange: value => {
      setAttributes({
        showHeader: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Title'),
    checked: showTitle,
    onChange: value => {
      setAttributes({
        showTitle: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Subtitle'),
    checked: showSubtitle,
    onChange: value => {
      setAttributes({
        showSubtitle: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Background Image'),
    checked: showImage,
    onChange: value => {
      setAttributes({
        showImage: value
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Home Background",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Background Image",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => {
      setAttributes({
        image: {
          id: media.id,
          url: media.url,
          alt: media.alt
        }
      });
    },
    value: image.id,
    render: _ref4 => {
      let {
        open
      } = _ref4;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        className: "button"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Image'));
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), image.id != 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => {
      setAttributes({
        image: {
          id: 0,
          url: '',
          alt: ''
        }
      });
    },
    className: "button button-primary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Image')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), image.url != '' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-themeisle-blocks-header__image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: image.url,
    alt: image.alt
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Background Color",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color'),
    value: image.color,
    onChange: value => {
      setAttributes({
        image: {
          color: value
        }
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Home Title",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    colors: [{
      name: 'Black',
      color: '#000'
    }, {
      name: 'White',
      color: '#fff'
    }, {
      name: 'Red',
      color: '#ff0000'
    }, {
      name: 'Green',
      color: '#00ff00'
    }, {
      name: 'Blue',
      color: '#0000ff'
    }],
    value: header_title.color,
    onChange: value => {
      setAttributes({
        header_title: { ...header_title,
          color: value
        }
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Home Subtitle",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    colors: [{
      name: 'Black',
      color: '#000'
    }, {
      name: 'White',
      color: '#fff'
    }, {
      name: 'Red',
      color: '#ff0000'
    }, {
      name: 'Green',
      color: '#00ff00'
    }, {
      name: 'Blue',
      color: '#0000ff'
    }],
    value: header_subtitle.color,
    onChange: value => {
      setAttributes({
        header_subtitle: { ...header_subtitle,
          color: value
        }
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "About Us Settings",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Visibility Settings",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show About Us'),
    checked: showAboutUs,
    onChange: value => {
      setAttributes({
        showAboutUs: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Row One'),
    checked: showRowOne,
    onChange: value => {
      setAttributes({
        showRowOne: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Row Two'),
    checked: showRowTwo,
    onChange: value => {
      setAttributes({
        showRowTwo: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Staff'),
    checked: showStaff,
    onChange: value => {
      setAttributes({
        showStaff: value
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Row One Settings",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Image Settings",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Image'),
    checked: showRowOneImage,
    onChange: value => {
      setAttributes({
        showRowOneImage: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), row_one.url != '' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-themeisle-blocks-body__image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: row_one.url,
    alt: row_one.alt
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => {
      setAttributes({
        row_one: { ...row_one,
          id: 0,
          url: '',
          alt: ''
        }
      });
    },
    className: "button button-primary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Image')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => {
      setAttributes({
        row_one: { ...row_one,
          id: media.id,
          url: media.url,
          alt: media.alt
        }
      });
    },
    value: row_one.id,
    render: _ref5 => {
      let {
        open
      } = _ref5;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        className: "button"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Change Image'));
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Text Settings",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Text'),
    checked: showRowOneText,
    onChange: value => {
      setAttributes({
        showRowOneText: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: row_one.color,
    onChange: value => {
      setAttributes({
        row_one: { ...row_one,
          color: value
        }
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Background Settings",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: row_one.back,
    onChange: value => {
      setAttributes({
        row_one: { ...row_one,
          back: value
        }
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Row Two Settings",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Image Settings",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Image'),
    checked: showRowTwoImage,
    onChange: value => {
      setAttributes({
        showRowTwoImage: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), row_two.url != '' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-themeisle-blocks-body__image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: row_two.url,
    alt: row_two.alt
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => {
      setAttributes({
        row_two: { ...row_two,
          id: 0,
          url: '',
          alt: ''
        }
      });
    },
    className: "button button-primary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Image')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => {
      setAttributes({
        row_two: { ...row_two,
          id: media.id,
          url: media.url,
          alt: media.alt
        }
      });
    },
    value: row_two.id,
    render: _ref6 => {
      let {
        open
      } = _ref6;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        onClick: open,
        className: "button"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Change Image'));
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Text Settings",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Text'),
    checked: showRowTwoText,
    onChange: value => {
      setAttributes({
        showRowTwoText: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: row_two.color,
    onChange: value => {
      setAttributes({
        row_two: { ...row_two,
          color: value
        }
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Background Settings",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    value: row_two.back,
    onChange: value => {
      setAttributes({
        row_two: { ...row_two,
          back: value
        }
      });
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Staff Settings",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Number of Staff'),
    value: staffNumber,
    onChange: value => {
      setAttributes({
        staffNumber: value
      });
    },
    min: 1,
    max: 9,
    step: 1
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Contact Us Settings",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Visibility Settings",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Contact Us'),
    checked: showContactUs,
    onChange: value => {
      setAttributes({
        showContactUs: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Contact Form'),
    checked: showContactForm,
    onChange: value => {
      setAttributes({
        showContactForm: value
      });
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Contact Form Setting",
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Contact Form Title'),
    checked: showContactFormTitle,
    onChange: value => {
      setAttributes({
        showContactFormTitle: value
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Show Name'),
    checked: showName,
    onChange: value => {
      setAttributes({
        showName: value
      });
    }
  }))))));
}
;

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    header_title,
    header_subtitle,
    image,
    showTitle,
    showSubtitle,
    showHeader,
    showImage,
    row_one,
    showRowOne,
    showRowOneImage,
    showRowOneSubtitle,
    showRowOneTitle,
    showRowOneText,
    row_two,
    showRowTwo,
    showRowTwoImage,
    showRowTwoSubtitle,
    showRowTwoTitle,
    showRowTwoText,
    showAboutUs,
    showStaff,
    staff,
    staffNumber,
    showContactUs,
    contact_form,
    showContactForm,
    showContactFormTitle,
    showName
  } = attributes;
  const staffNum = staffNumber;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(), {
    style: {
      maxWidth: '840px',
      margin: '0 auto',
      fontFamily: '-moz-initial'
    }
  }), showHeader && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "pageblock-home",
    style: {
      backgroundImage: showImage ? `url(${image.url})` : 'none',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundColor: image.color,
      padding: '120px 60px 120px 60px'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "pageblock-home-title",
    style: {
      textAlign: header_title.align
    }
  }, showTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "h2",
    value: header_title.text,
    style: {
      color: header_title.color
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "pageblock-home-subtitle",
    style: {
      textAlign: header_title.align
    }
  }, showSubtitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "p",
    value: header_subtitle.text,
    style: {
      color: header_subtitle.color,
      padding: '0 70px 0 70px'
    }
  }))), showAboutUs && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "pageblock-about-us"
  }, showRowOne && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "pageblock-about-us_row-one",
    style: {
      backgroundColor: row_one.back,
      display: 'grid',
      gridTemplateColumns: '50% auto',
      columnGap: '20px',
      padding: '25px'
    }
  }, showRowOneImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    src: row_one.url,
    alt: row_one.alt,
    style: {
      width: '100%'
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "pageblock-about-us-content_one"
  }, showRowOneSubtitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "small",
    value: row_one.subtitle
  }), showRowOneTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "h2",
    value: row_one.title
  }), showRowOneText && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "p",
    value: row_one.text
  }))), showRowTwo && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "pageblock-body-row-two",
    style: {
      backgroundColor: row_two.back,
      display: 'grid',
      gridTemplateColumns: 'auto 50%',
      columnGap: '20px',
      padding: '25px'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "pageblock-about-us-content_two"
  }, showRowTwoSubtitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "small",
    value: row_two.subtitle
  }), showRowTwoTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "h2",
    value: row_two.title
  }), showRowTwoText && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "p",
    value: row_two.text
  })), showRowTwoImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    src: row_two.url,
    alt: row_two.alt,
    style: {
      width: '100%'
    }
  }))), showStaff && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "pageblock-about-us-staff staff",
    style: {
      display: 'grid',
      gridTemplateColumns: '33% 33% 33%',
      columnGap: '5px'
    }
  }, staff.map((staffMember, index) => {
    if (index < staffNum && staff.length != 0) {
      if (staffNum < 4) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "staff-member"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          style: {
            backgroundColor: 'whitesmoke',
            textAlign: 'center'
          }
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h5", null, staffMember.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, staffMember.position)));
      }

      if (staffNum > 3 && staffNum < 7) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "staff-member"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          style: {
            backgroundColor: 'whitesmoke',
            textAlign: 'center'
          }
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h5", null, staffMember.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, staffMember.position)));
      }

      if (staffNum > 6 && staffNum < 10) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          className: "staff-member"
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
          style: {
            backgroundColor: 'whitesmoke',
            textAlign: 'center'
          }
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h5", null, staffMember.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", null, staffMember.position)));
      }
    }
  }))), showContactUs && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "pageblock-about-us-contact-us contact-us"
  }, showContactForm && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "contact-us-contact-form contact-form"
  }, showContactFormTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "contact-us-contact-form-title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "h4",
    value: contact_form.title
  })), showName && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "contact-us-contact-form-name"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
    htmlFor: "name",
    style: {
      display: 'block',
      margin: '10px',
      fontSize: '1.2rem',
      textTransform: 'uppercase',
      textAlign: 'left'
    }
  }, "Name"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
    required: true,
    type: "text",
    className: "form-control",
    id: "name",
    placeholder: "Enter name",
    style: {
      width: '50%',
      borderRadius: '25px',
      border: '1px solid #ccc',
      padding: '10px',
      fontSize: '1rem',
      textAlign: 'left',
      fontFamily: '-moz-initial'
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "contact-us-contact-form-email"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
    htmlFor: "email",
    style: {
      display: 'block',
      margin: '10px',
      fontSize: '1.2rem',
      textTransform: 'uppercase',
      textAlign: 'left'
    }
  }, "Email"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
    required: true,
    type: "email",
    className: "form-control",
    id: "email",
    placeholder: "Enter email",
    style: {
      width: '50%',
      borderRadius: '25px',
      border: '1px solid #ccc',
      padding: '10px',
      fontSize: '1rem',
      textAlign: 'left',
      fontFamily: '-moz-initial'
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "contact-us-contact-form-message"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("label", {
    htmlFor: "message",
    style: {
      display: 'block',
      margin: '10px',
      fontSize: '1.2rem',
      textTransform: 'uppercase',
      textAlign: 'left'
    }
  }, "Message"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("textarea", {
    required: true,
    className: "form-control",
    id: "message",
    rows: "3",
    placeholder: "Enter message",
    style: {
      width: '70%',
      borderRadius: '15px',
      border: '1px solid #ccc',
      padding: '10px',
      fontSize: '1rem',
      textAlign: 'left',
      fontFamily: '-moz-initial'
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "contact-us-contact-form-button"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    type: "submit",
    className: "btn btn-primary",
    style: {
      borderRadius: '15px',
      border: '1px solid #ccc',
      fontSize: '1.05rem',
      textTransform: 'uppercase',
      textAlign: 'center',
      padding: '5px',
      fontFamily: '-moz-initial'
    }
  }, " ", contact_form.submit, " ")))));
}

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"create-block/pageblock","version":"0.1.0","title":"Pageblock","category":"widgets","icon":"admin-page","description":"Example static block scaffolded with Create Block tool.","supports":{"html":false},"attributes":{"header_title":{"type":"object","default":{"text":"","tag":"h2","align":"","color":""}},"header_subtitle":{"type":"object","default":{"text":"","tag":"small","color":""}},"image":{"type":"object","default":{"url":"","id":"","alt":"","color":""}},"showHeader":{"type":"boolean","default":true},"showTitle":{"type":"boolean","default":true},"showSubtitle":{"type":"boolean","default":true},"showImage":{"type":"boolean","default":true},"row_one":{"type":"object","default":{"subtitle":"","title":"","text":"","selector":".row-one","align":"","back":"","color":"","url":"","id":"","alt":""}},"showRowOne":{"type":"boolean","default":true},"showRowOneImage":{"type":"boolean","default":true},"showRowOneSubtitle":{"type":"boolean","default":true},"showRowOneTitle":{"type":"boolean","default":true},"showRowOneText":{"type":"boolean","default":true},"row_two":{"type":"object","default":{"subtitle":"","title":"","text":"","selector":".row-two","align":"","back":"","color":"","url":"","id":"","alt":""}},"showRowTwo":{"type":"boolean","default":true},"showRowTwoImage":{"type":"boolean","default":true},"showRowTwoSubtitle":{"type":"boolean","default":true},"showRowTwoTitle":{"type":"boolean","default":true},"showRowTwoText":{"type":"boolean","default":true},"showAboutUs":{"type":"boolean","default":true},"staff":{"type":"array","default":[]},"showStaff":{"type":"boolean","default":true},"staffNumber":{"type":"number","default":1},"showContactUs":{"type":"boolean","default":true},"contact_form":{"type":"object","default":{"title":"","name":"","email":"","message":"","submit":"","success":"","error":"","selector":".contact-form"}},"showContactForm":{"type":"boolean","default":true},"showContactFormTitle":{"type":"boolean","default":true},"staffImage":{"type":"object","default":{"url":"","id":"","alt":"","source_url":""}},"showName":{"type":"boolean","default":true}},"textdomain":"pageblock","editorScript":"file:./index.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/block.json");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map